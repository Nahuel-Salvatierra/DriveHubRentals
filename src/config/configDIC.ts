import { Sequelize } from "sequelize";
import { CustomerModel } from "../module/customer/infrastructure/customer.model";
import { CustomerService } from "../module/customer/app/service/customer.service";
import { CustomerController } from "../module/customer/controller/customer.controller";
import { CustomerRepository } from "../module/customer/infrastructure/customer.repository";
import { DIContainer } from "rsdi";
import { dbConfig } from "./init.db";

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
	return container;
};
