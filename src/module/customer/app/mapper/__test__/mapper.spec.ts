import Customer from "../../../domain/customer.entity";
import { fromCustomerModelToEntity } from "../fromCustomerModelToEntity";
import { sampleCustomer } from "./../../../../../__test__/customer.fixture";

describe("Mappers", () => {
	it("Should convert a customer dto to entity", () => {
		const customerDto = fromCustomerModelToEntity(sampleCustomer);
		expect(customerDto).toBeInstanceOf(Customer);
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
