import { sampleCar } from "./car.fixture";
import { sampleCustomer } from "./customer.fixture";
import { carModel, customerModel, rentModel } from "./config.jest";
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


