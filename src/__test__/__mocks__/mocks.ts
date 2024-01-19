import { CarRepository, CarService } from "../../module/car/car.module";
import { CustomerRepository, CustomerService } from "../../module/customer/customer.module";
import { RentRepository, RentService } from "../../module/rent/rent.module";
import { carModel, customerModel, rentModel } from "../config.jest";

export let rentRepositoryMock: RentRepository = {
	save: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	getById: jest.fn(() => Promise.resolve({})),
	delete: jest.fn(() => Promise.resolve(true)),
	findByCarId: jest.fn(() => Promise.resolve({})),
	findByCustomerId: jest.fn(() => Promise.resolve({})),
	rentModel: rentModel,
};
export let carRepositoryMock: CarRepository = {
	save: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	delete: jest.fn(() => Promise.resolve(true)),
	carModel: carModel,
};
export let customerRepositoryMock: CustomerRepository = {
	save: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	delete: jest.fn(() => Promise.resolve(true)),
	customerModel: customerModel,
};

export let customerServiceMock: CustomerService = {
	create: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	update: jest.fn(() => Promise.resolve({})),
	delete: jest.fn(() => Promise.resolve()),
	customerRepository: customerRepositoryMock,
};

export let carServiceMock: CarService = {
	create: jest.fn(() => Promise.resolve({})),
	getall: jest.fn(() => Promise.resolve([])),
	getById: jest.fn(() => Promise.resolve({})),
	update: jest.fn(() => Promise.resolve({})),
	delete: jest.fn(() => Promise.resolve()),
	carRepository: carRepositoryMock,
};

// export let rentServiceMock:RentService = {
// 	create: jest.fn(() => Promise.resolve({})),
// 	validateTransaction: jest.fn(),
// 	customerHasDebt: jest.fn(() => Promise.resolve()),
// 	isCarRent	: jest.fn(() => Promise.resolve(false)),
// 	isCustomerRent: jest.fn(() => Promise.resolve(false)),
// 	rentRepository: rentRepositoryMock,
// 	carService: carServiceMock,
// 	customerService: customerServiceMock,
// }