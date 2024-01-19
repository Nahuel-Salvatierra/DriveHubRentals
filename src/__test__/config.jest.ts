import { Sequelize } from "sequelize-typescript";

import { CarModel } from "../module/car/car.module";
import { CustomerModel } from "../module/customer/customer.module";
import { RentModel } from "../module/rent/rent.module";
import { sampleCar, sampleCar1 } from "./car.fixture";
import { sampleCustomer, sampleCustomer1 } from "./customer.fixture";
import { savedRent } from "./rent.fixture";

const currentDate = new Date()
	.toISOString()
	.replace(/[-T:.Z]/g, "_")
	.slice(0, -1);
const dbName = `./data/test/DHR_test_${currentDate}.sqlite`;

export const sequelizeInstance = new Sequelize({
	dialect: "sqlite",
	storage: dbName,
	logging: false,
});

export const customerModel = CustomerModel.setup(sequelizeInstance);
export const carModel = CarModel.setup(sequelizeInstance);
export const rentModel = RentModel.setup(sequelizeInstance);

function setAssociations() {
	rentModel.belongsTo(CustomerModel, {
		foreignKey: "customerId",
	});
	rentModel.belongsTo(CarModel, {
		foreignKey: "carId",
	});
}

export async function loadFixtureRents(rent?: boolean) {
	setAssociations();
	await sequelizeInstance.sync({ force: true });
	(await customerModel.create({ ...sampleCustomer })).save;
	(await customerModel.create({ ...sampleCustomer1 })).save;
	(await carModel.create({ ...sampleCar })).save;
	(await carModel.create({ ...sampleCar1 })).save;
	rent && (await rentModel.create({ ...savedRent })).save;
}
