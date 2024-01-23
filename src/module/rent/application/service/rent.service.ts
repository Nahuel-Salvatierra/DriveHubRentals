import { CarService } from "../../../car/application/service/car.service";
import { CustomerService } from "../../../customer/customer.module";
import { Rent, StatusEnum } from "../../domain/rent.entity";
import { CreateRentDto } from "../dto/create.rent.dto";
import { UpdateRentDto } from "../dto/update.rent.dto";
import { fromRentDtoToEntity } from "../mapper/fromDtoRentToEntity";
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

	async create(rent: CreateRentDto): Promise<Rent> {
		const newRent = fromRentDtoToEntity(rent);
		const { carId, customerId } = rent;
		try {
			await this.validateTransaction(carId!, customerId!);
			newRent.totalPrice = this.setTotalPrice(
				newRent.endDate,
				newRent.startDate,
				newRent.unitPrice
			);
			const rentSaved = await this.rentRepository.save(newRent);
			return rentSaved;
		} catch (error) {
			throw error;
		}
	}

	private async checkCarRent(carId: number): Promise<false> {
		const rent = await this.rentRepository.findByCarId(carId);
		if (rent?.status === StatusEnum.pending)
			throw new Error("Car is already rented");
		return false;
	}

	private async checkCustomerRent(customerId: number): Promise<false> {
		const rent = await this.rentRepository.findByCustomerId(customerId);
		if (rent?.status === StatusEnum.pending)
			throw new Error("Customer has a rented");
		return false;
	}

	private async validateTransaction(
		carId: number,
		customerId: number
	): Promise<void> {
		await this.customerService.getById(customerId);
		await this.carService.getById(carId);
		await this.checkCarRent(carId);
		await this.checkCustomerRent(customerId);
	}

	async getAll() {
		try {
			const rents = await this.rentRepository.getAll();
			return rents.map((rent) => fromModelRentToEntity(rent));
		} catch (error) {
			throw error;
		}
	}

	async getById(rentId: number) {
		try {
			const rent = await this.rentRepository.getById(rentId);
			return fromModelRentToEntity(rent);
		} catch (error) {
			throw error;
		}
	}

	async delete(rentId: number) {
		try {
			const deleted = await this.rentRepository.delete(rentId);
			return deleted;
		} catch (error) {
			throw error;
		}
	}

	async update(rent: UpdateRentDto, rentId: number) {
		try {
			const rentToUpdated = fromModelRentToEntity(
				await this.rentRepository.getById(rentId)
			);
			Object.assign(rentToUpdated, rent);
			console.log(rentToUpdated)
			const updatedRent = await this.rentRepository.save(rentToUpdated);
			return fromModelRentToEntity(updatedRent);
		} catch (error) {
			throw error;
		}
	}

	setTotalPrice(endDate: Date, startDate: Date, unitPrice: number): number {
		const endTime = new Date(endDate).getTime();
		const startTime = new Date(startDate).getTime();
		const diff = endTime - startTime;
		return Math.ceil((unitPrice * diff) / (1000 * 60 * 60 * 24));
	}
}
