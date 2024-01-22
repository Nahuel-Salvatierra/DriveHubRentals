import { CarService } from "../../../car/application/service/car.service";
import { CustomerService } from "../../../customer/customer.module";
import { Rent } from "../../domain/rent.entity";
import { fromModelRentToEntity } from "../mapper/fromModelRentToEntity";
import { IRentRepository } from "../repository/rent.repository.interface";

export class RentService {
	rentRepository: IRentRepository;
	carService: CarService;
	customerService: CustomerService;
	constructor(
		rentRepository: IRentRepository,
		carService: CarService,
		customerSer: CustomerService
	) {
		this.rentRepository = rentRepository;
		this.carService = carService;
		this.customerService = customerSer;
	}

	async create(rent: Rent): Promise<Rent> {
		const { carId, customerId } = rent;
		try {
			await this.validateTransaction(carId!, customerId!);
			const rentSaved = await this.rentRepository.save(rent);
			return rentSaved
		} catch (error) {
			throw error;
		}
	}

	async checkCarRent(carId: number): Promise<false> {
		const rent = await this.rentRepository.findByCarId(carId);
		if (rent.id) throw new Error("Car is already rented");
		return false;
	}

	async checkCustomerRent(customerId: number): Promise<false> {
		const rent = await this.rentRepository.findByCustomerId(customerId);
		if (rent.id) throw new Error("Customer has a rented");
		return false;
	}

	async customerHasDebt(customerId: number) {}

	async validateTransaction(carId: number, customerId: number) {
		await this.customerService.getById(customerId);
		await this.carService.getById(carId);
		await this.checkCarRent(carId);
		await this.checkCustomerRent(customerId);
	}

	async getAll(){
		try {
			const rents = await this.rentRepository.getAll();
			return rents.map((rent)=>fromModelRentToEntity(rent))
		} catch (error) {
			throw error
		}
	}

	async getById(rentId: number){
		try {
			const rent = await this.rentRepository.getById(rentId);
			return fromModelRentToEntity(rent)
		} catch (error) {
			throw error
		}
	}
}
