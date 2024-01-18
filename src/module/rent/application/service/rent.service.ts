import { CarService } from "../../../car/application/service/car.service";
import { CustomerService } from "../../../customer/customer.module";
import { Rent } from "../../domain/rent.entity";
import { RentRepository } from "../../infrastructure/rent.repository";
import { CreateRentDto } from "../dto/create.rent.dto";

export class RentService {
	rentRepository: RentRepository;
	carService: CarService;
	customerService: CustomerService;
	constructor(
		rentRepository: RentRepository,
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
			await this.carService.getById(carId!);
			await this.customerService.getById(customerId!);
			await this.isCarRent(carId!);
			await this.isCustomerRent(customerId!);

			const rentSaved = await this.rentRepository.save({
				...rent,
				carId,
				customerId,
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
}
