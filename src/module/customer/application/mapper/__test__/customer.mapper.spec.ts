import Customer from "../../../domain/customer.entity";
import { fromCustomerModelToEntity } from "../fromCustomerModelToEntity";
import { sampleCustomer } from "../../../../../__test__/fixtures/customer.fixture";

describe("Mappers", () => {
	it("Should convert a customer dto to entity", () => {
		const customerDto = fromCustomerModelToEntity(sampleCustomer);
		expect(customerDto).toBeInstanceOf(Customer);
		expect(customerDto.address).toBeDefined()
		expect(customerDto.email).toBeDefined()
		expect(customerDto.phone).toBeDefined()
		expect(customerDto.birthDate).toBeDefined()
		expect(customerDto.documentNumber).toBeDefined()
		expect(customerDto.documentType).toBeDefined()
		expect(customerDto.lastName).toBeDefined()
		expect(customerDto.name).toBeDefined()
	});

	it("Should convert a customer model to entity", () => {
		const customerModel = fromCustomerModelToEntity({
			sampleCustomer,
			id: 2,
			createAt: new Date(),
			updateAt: new Date(),
		});
    expect(customerModel).toBeInstanceOf(Customer)
	});
});
