import { Sequelize } from "sequelize-typescript";

import { CarModel, CarRepository, CarService } from "../module/car/car.module";
import { CustomerModel, CustomerRepository, CustomerService } from "../module/customer/customer.module";
import { RentModel, RentRepository, RentService } from "../module/rent/rent.module";
import { sampleCar } from "./car.fixture";
import { sampleCustomer } from "./customer.fixture";
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
	(await carModel.create({ ...sampleCar })).save;
	rent && (await rentModel.create({ ...savedRent })).save;
	console.log("Fixture charged");
}
