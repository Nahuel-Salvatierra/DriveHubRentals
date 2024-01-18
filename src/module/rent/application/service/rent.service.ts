import { CarService } from "../../../car/application/service/car.service";
import { CustomerService } from "../../../customer/customer.module";
import { Rent } from "../../domain/rent.entity";
import { CreateRentDto } from "../dto/create.rent.dto";
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
		const { car, customer } = rent;
		try {
			this.validateTransaction(car?.id!, customer?.id!);
			const rentSaved = await this.rentRepository.save({
				...rent,
			});
			return rentSaved;
		} catch (error) {
			throw error;
		}
	}

	async isCarRent(carId: number): Promise<false> {
		const rent = await this.rentRepository.findByCarId(carId);
		if (rent) throw new Error("Car is already rented");
		return false;
	}

	async isCustomerRent(customerId: number): Promise<false> {
		const rent = await this.rentRepository.findByCustomerId(customerId);
		if (rent) throw new Error("Customer has a rented");
		return false;
	}

	async customerHasDebt(customerId: number) {
		
	}

	async validateTransaction(carId: number, customerId: number) {
		try {
			await this.customerService.getById(customerId!);
			await this.carService.getById(carId!);
			await this.isCarRent(carId!);
			await this.isCustomerRent(customerId!);
		} catch (error) {
			throw error;
		}
	}
}
