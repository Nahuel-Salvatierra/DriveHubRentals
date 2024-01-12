import { Sequelize } from "sequelize";
import { CustomerModel, CustomerRepository } from "../../../customer.module";
import Customer from "../../../domain/customer.entity";

describe("Customer controller", () => {

	const sequelizeInstance = new Sequelize("sqlite::memory");
	let repository:CustomerRepository;

	const sampleCustomer = new Customer();
	sampleCustomer.name;
	sampleCustomer.lastName;
	sampleCustomer.address;
	sampleCustomer.documentType;
	sampleCustomer.documentNumber;
	sampleCustomer.birthrate;
	sampleCustomer.email;
	sampleCustomer.phone;

	beforeAll(() => {
		const club = CustomerModel.setup(sequelizeInstance);
		repository = new CustomerRepository(club);
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a first customer", async () => {
		const newCustomer = await repository.saveCustomer(sampleCustomer);
		expect(newCustomer.id).toEqual(1);
	});
});
