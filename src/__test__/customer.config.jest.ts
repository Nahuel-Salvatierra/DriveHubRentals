import { CustomerModel } from "../module/customer/customer.module";
import { Sequelize } from "sequelize-typescript";

export const sequelizeInstance = new Sequelize("sqlite::memory:", {
	logging: false,
});
export const customerModel = CustomerModel.setup(sequelizeInstance);
