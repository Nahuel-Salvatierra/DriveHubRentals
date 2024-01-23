import { CarRepository, CarService } from "../../module/car/car.module";
import {
	CustomerRepository,
	CustomerService,
} from "../../module/customer/customer.module";
import { Rent } from "../../module/rent/domain/rent.entity";
import { RentRepository, RentService } from "../../module/rent/rent.module";
import { carModel, customerModel, rentModel } from "../config.jest";

export const rentRepositoryMock: RentRepository = {
	save: jest.fn(() => Promise.resolve({} as Rent)),
	getAll: jest.fn(() => Promise.resolve([])),
	getById: jest.fn(() => Promise.resolve({} as Rent)),
	delete: jest.fn(() => Promise.resolve(true)),
	findByCarId: jest.fn(() => Promise.resolve({} as Rent)),
	findByCustomerId: jest.fn(() => Promise.resolve({} as Rent)),
	rentModel: rentModel,
};
export const carRepositoryMock: CarRepository = {
	save: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	delete: jest.fn(() => Promise.resolve(true)),
	carModel: carModel,
};
export const customerRepositoryMock: CustomerRepository = {
	save: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	delete: jest.fn(() => Promise.resolve(true)),
	customerModel: customerModel,
};

export const customerServiceMock: CustomerService = {
	create: jest.fn(() => Promise.resolve({})),
	getById: jest.fn(() => Promise.resolve({})),
	getAll: jest.fn(() => Promise.resolve([])),
	update: jest.fn(() => Promise.resolve({})),
	delete: jest.fn(() => Promise.resolve()),
	customerRepository: customerRepositoryMock,
};

export const carServiceMock: CarService = {
	create: jest.fn(() => Promise.resolve({})),
	getall: jest.fn(() => Promise.resolve([])),
	getById: jest.fn(() => Promise.resolve({})),
	update: jest.fn(() => Promise.resolve({})),
	delete: jest.fn(() => Promise.resolve()),
	carRepository: carRepositoryMock,
};

type RentServiceMock = Omit<
	RentService,
	"validateTransaction" | "checkCarRent" | "checkCustomerRent"
>;

export const rentServiceMock: RentServiceMock = {
	create: jest.fn(() => Promise.resolve({} as Rent)),
	getAll: jest.fn(() => Promise.resolve([])),
	getById: jest.fn(() => Promise.resolve({} as Rent)),
	delete: jest.fn(() => Promise.resolve(true)),
	update: jest.fn(() => Promise.resolve({} as Rent)),
	setTotalPrice: jest.fn(),
	rentRepository: rentRepositoryMock,
	carService: carServiceMock,
	customerService: customerServiceMock,
};
