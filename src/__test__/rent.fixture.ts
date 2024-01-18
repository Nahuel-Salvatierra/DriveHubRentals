import { Sequelize } from "sequelize";
import { CreateRentDto } from "../module/rent/application/dto/create.rent.dto";
import { Rent } from "../module/rent/domain/rent.entity";
import { RentRepository } from "../module/rent/rent.module";
import { sampleCar } from "./car.fixture";
import { sampleCustomer } from "./customer.fixture";
import { carModel, customerModel } from "./config.jest";
import { CarRepository } from "../module/car/car.module";
import { CustomerRepository } from "../module/customer/customer.module";

export const sampleRent = {
	customerId: { ...sampleCustomer, id: 1 },
	carId: { ...sampleCar, id: 1 },
	unitPrice: 100,
	totalPrice: 100,
	paymentMethod: "credit card",
	isPaid: true,
	startDate: new Date(),
	endDate: new Date(+7),
};

export async function loadFixtureRents(){
	const carRepository = new CarRepository(carModel);
	const customerRepository = new CustomerRepository(customerModel);

	await carRepository.save(sampleCar);
	await customerRepository.save(sampleCustomer);
}
