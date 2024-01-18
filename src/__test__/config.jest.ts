import { CarModel } from "../module/car/car.module";
import { CustomerModel } from "../module/customer/customer.module";
import { Sequelize } from "sequelize-typescript";
import { RentModel } from "../module/rent/rent.module";

export const sequelizeInstance = new Sequelize("sqlite::memory:", {
	logging: false,
});
export const customerModel = CustomerModel.setup(sequelizeInstance);
export const carModel = CarModel.setup(sequelizeInstance)
export const rentModel = RentModel.setup(sequelizeInstance)
