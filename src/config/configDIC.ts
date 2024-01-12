import { Sequelize } from "sequelize";
import { CustomerModel } from "../module/customer/infrastructure/customer.model";
import { CustomerService } from "../module/customer/app/service/customer.service";
import { CustomerController } from "../module/customer/controller/customer.controller";
import { CustomerRepository } from "../module/customer/infrastructure/customer.repository";
import { DIContainer } from "rsdi";

export const dbConfig = (): Sequelize => {
	if (process.env.PROJECT_STATUS === "development") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: "./data/development_database.sqlite",
		});
		return sequelize;
	}

	if (process.env.PROJECT_STATUS === "test") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: `./data/test/test${Math.random() * 1000}.sqlite`,
			logging: false,
		});
		return sequelize;
	}

	throw Error("PROJECT_STATUS env variable not found");
};

export const sequelize = new Sequelize({
	database: "DHR_DB",
	dialect: "sqlite",
	storage: `./data/test/DHR_DB.sqlite`,
});

export const addCustomerModuleDependency = (dIContainer: DIContainer) => {
	dIContainer
		.add("sequelize", () => dbConfig())
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

export const configDIC = (): DIContainer => {
	const container = new DIContainer();
	addCustomerModuleDependency(container);
	const db:Sequelize = container.get("sequelize" as never)
	db.sync()
	console.log(container);
	return container;
};
