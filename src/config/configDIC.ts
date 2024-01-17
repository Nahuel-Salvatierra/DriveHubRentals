import { Sequelize } from "sequelize";
import {
	CustomerController,
	CustomerModel,
	CustomerRepository,
	CustomerService,
} from "../module/customer/customer.module";
import { DIContainer } from "rsdi";
import { dbConfig } from "./init.db";
import {
	CarModel,
	CarRepository,
	CarService,
	CarController,
} from "../module/car/car.module";

export const addCustomerModuleDependency = (dIContainer: DIContainer) => {
	let sequelize = getSequelizeDIC(dIContainer);
	dIContainer
		.add("customerModel", () => CustomerModel.setup(sequelize))
		.add(
			"customerRepository",
			({ customerModel }) => new CustomerRepository(customerModel)
		)
		.add(
			"customerService",
			({ customerRepository }) => new CustomerService(customerRepository)
		)
		.add(
			"customerController",
			({ customerService }) => new CustomerController(customerService)
		);
};

export const addCommonDependency = (dIContainer: DIContainer) => {
	dIContainer.add("sequelize", () => dbConfig());
};

function getSequelizeDIC(dIContainer: DIContainer): Sequelize {
	return dIContainer.get("sequelize" as never);
}

export const addCarModuleDependency = (dIContainer: DIContainer) => {
	let sequelize = getSequelizeDIC(dIContainer);
	dIContainer
		.add("carModel", () => CarModel.setup(sequelize))
		.add("carRepository", ({ carModel }) => new CarRepository(carModel))
		.add("carService", ({ carRepository }) => new CarService(carRepository))
		.add(
			"carController",
			({ carService }) => new CarController(carService)
		);
};

export const configDIC = (): DIContainer => {
	const container = new DIContainer();
	addCommonDependency(container);
	addCustomerModuleDependency(container);
	addCarModuleDependency(container);
	const db: Sequelize = container.get("sequelize" as never);
	db.sync();
	console.log("IDC initialized", container);
	return container;
};
