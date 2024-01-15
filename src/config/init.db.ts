import { Sequelize } from "sequelize";

export const dbConfig = (): Sequelize => {
	if (process.env.PROJECT_STATUS === "development") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: "./data/DHR_development.sqlite",
		});
		return sequelize;
	}

	if (process.env.PROJECT_STATUS === "test") {
		const sequelize = new Sequelize({
			dialect: "sqlite",
			storage: `./data/test/DHR_test${new Date()}.sqlite`,
			logging: false,
		});
		return sequelize;
	}

	throw Error("PROJECT_STATUS env variable not found");
};

