import { DIContainer } from "rsdi";
import { Sequelize } from "sequelize";
import { RentModel } from "../module/rent/rent.module";
import { CustomerModel } from "../module/customer/customer.module";

export const dbConfig = (): Sequelize => {
	if (process.env.NODE_ENV === "development") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: "./data/DHR_development.sqlite",
		});
		return sequelize;
	}

	if (process.env.NODE_ENV === "test") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: `./data/test/DHR_test${new Date()}.sqlite`,
			logging: false,
		});
		return sequelize;
	}

	throw Error("PROJECT_STATUS env variable not found");
};

export function setAssociations(dIContainer: DIContainer) {
	const rent: typeof RentModel = dIContainer.get("rentModel" as never);
	const customer: typeof CustomerModel = dIContainer.get(
		"customerModel" as never
	);
	rent.belongsTo(CustomerModel, {
		foreignKey: "customerId",
	});
	customer.hasOne(RentModel);
}
