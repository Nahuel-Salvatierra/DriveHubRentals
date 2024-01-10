import { Sequelize } from "sequelize";
import { CustomerModel } from "../module/customer/infrastructure/customer.model";
import { CustomerService } from "../module/customer/app/service/customer.service";
import { CustomerController } from "../module/customer/interface/customer.controller";
import { CustomerRepository } from "../module/customer/infrastructure/customer.repository";
import { DIContainer } from "rsdi";
import { IDIContainer } from "rsdi/dist/types";
import { Application } from "express";

const dbConfig = (): Sequelize => {
	if (process.env.PROJECT_STATUS === "development") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: "./data/development_database.db",
		});
		return sequelize;
	}

	if (process.env.PROJECT_STATUS === "test") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: `./data/test/test${Math.random() * 1000}.db`,
			logging: false,
		});
		return sequelize;
	}

	throw Error("PROJECT_STATUS env variable not found");
};

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: `./data/test/test${Math.random() * 1000}.db`,
	logging: false,
});

const addCustomerModuleDependency = (dIContainer: DIContainer) => {
	dIContainer
		.add("sequelize", () => sequelize)
		.add("customerModel", ({ sequelize }) => CustomerModel.setup(sequelize))
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

export function configureDI(): DIContainer {
	const container = new DIContainer();
	addCustomerModuleDependency(container);
	return container;
}

export function init(app: Application, container) {
	const customerController = container;
	customerController.configureRoutes(app);
}
