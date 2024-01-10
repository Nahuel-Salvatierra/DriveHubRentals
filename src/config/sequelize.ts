import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
	dialect: "sqlite",
	database: "CarRent",
	storage: "./db",
	models: [__dirname + "/models"],
});
