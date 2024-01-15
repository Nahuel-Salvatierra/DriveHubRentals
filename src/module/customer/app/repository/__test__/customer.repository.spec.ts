import { Sequelize } from "sequelize";
import { CustomerModel, CustomerRepository } from "../../../customer.module";
import Customer, { DocumentTypeEnum } from "../../../domain/customer.entity";

const sequelizeInstance = new Sequelize("sqlite::memory");
export const customerModel = CustomerModel.setup(sequelizeInstance);

describe("Customer repository", () => {
	let repository: CustomerRepository;

	const sampleCustomer = new Customer();
	sampleCustomer.name = "name";
	sampleCustomer.lastName = "lastName";
	sampleCustomer.address = "address";
	sampleCustomer.documentType = DocumentTypeEnum.dni;
	sampleCustomer.documentNumber = 12345678;
	sampleCustomer.birthrate = new Date();
	sampleCustomer.email = "email@mainModule.com";
	sampleCustomer.phone = 1112345678;

	beforeAll(() => {
		repository = new CustomerRepository(customerModel);
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a customer", async () => {
		const newCustomer = await repository.saveCustomer(sampleCustomer);
		expect(newCustomer.id).toEqual(1);
	});

	it("Should get a customer by ID", async () => {
		const customer = await repository.saveCustomer(sampleCustomer);
		const customerById = await repository.getCustomerById(1);
		expect(customerById).toHaveProperty("name", sampleCustomer.name);
		expect(customerById).toHaveProperty("email", sampleCustomer.email);
	});

	it("Should get an array of customers", async () => {
		await repository.saveCustomer(sampleCustomer);
		await repository.saveCustomer(sampleCustomer);

		const customers = await repository.getAllCustomers();
		expect(customers).toHaveLength(2);
	});

	it("Should update a customer with ID 1", async () => {
		const customer = await repository.saveCustomer(sampleCustomer);
		const customerToUpdate = { ...customer };
		customerToUpdate.name = "nameChanged";

		const customerUpdated = await repository.saveCustomer(customerToUpdate);
		expect(customerUpdated.name).toBe("nameChanged");
		expect(customerUpdated.id).toBe(1);
	});

	it("Should delete customer", async () => {
		const customer = await repository.saveCustomer(sampleCustomer);
		const customerDeleted = await repository.deleteCustomer(customer.id!);
		expect(customerDeleted).toBe(true);
	});

	it("Should throw an error when try to delete a customer with ID", async () => {
		const customer = await repository.saveCustomer(sampleCustomer);
		const customerDeleted = await repository.deleteCustomer(2);
		expect(customerDeleted).toBe(false);
	});
});
