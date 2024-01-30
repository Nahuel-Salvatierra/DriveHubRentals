import { CustomerRepository } from "../../../customer.module";
import { sampleCustomer } from "../../../../../__test__/fixtures/customer.fixture";
import { customerModel, sequelizeInstance } from "../../../../../__test__/config.jest";
customerModel

describe("Customer Repository", () => {
	let repository: CustomerRepository;

	beforeAll(() => {
		repository = new CustomerRepository(customerModel);
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a customer", async () => {
		const newCustomer = await repository.save(sampleCustomer);
		expect(newCustomer.id).toEqual(1);
		expect(newCustomer.name).toEqual(sampleCustomer.name);
	});

	it("Should get a customer by ID", async () => {
		const customer = await repository.save(sampleCustomer);
		const customerById = await repository.getById(1);
		expect(customerById).toHaveProperty("name", sampleCustomer.name);
		expect(customerById).toHaveProperty("email", sampleCustomer.email);
	});

	it("Should get an array of customers", async () => {
		await repository.save(sampleCustomer);
		await repository.save(sampleCustomer);

		const customers = await repository.getAll();
		expect(customers).toHaveLength(2);
	});

	it("Should update a customer with ID 1", async () => {
		const customer = await repository.save(sampleCustomer);
		const customerToUpdate = { ...customer };
		customerToUpdate.name = "nameChanged";

		const customerUpdated = await repository.save(customerToUpdate);
		expect(customerUpdated.name).toBe("nameChanged");
		expect(customerUpdated.id).toBe(1);
	});

	it("Should delete customer", async () => {
		const customer = await repository.save(sampleCustomer);
		const customerDeleted = await repository.delete(customer.id!);
		expect(customerDeleted).toBe(true);
	});

	it("Should throw an error when try to delete a customer with ID", async () => {
		const customer = await repository.save(sampleCustomer);
		const customerDeleted = await repository.delete(2);
		expect(customerDeleted).toBe(false);
	});
});
export { sampleCustomer, customerModel };

