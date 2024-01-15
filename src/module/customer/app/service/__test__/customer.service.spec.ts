import { CustomerRepository } from "../../../customer.module";
import { customerModel } from "../../repository/__test__/customer.repository.spec";
import { CustomerService } from "../customer.service";

const repositoryMock: CustomerRepository = {
	saveCustomer: jest.fn(),
	getCustomerById: jest.fn(),
	getAllCustomers: jest.fn(),
	deleteCustomer: jest.fn(),
	customerModel: customerModel,
};

const service = new CustomerService(repositoryMock);

describe("Customer service", () => {
	it.only("Should call saveCustomer once", async () => {
    service.create({});
		expect(repositoryMock.saveCustomer).toHaveBeenCalledTimes(1);
	});
});
