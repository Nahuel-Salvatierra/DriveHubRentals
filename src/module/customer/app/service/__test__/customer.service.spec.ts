import { CustomerRepository } from "../../../customer.module";
import { customerModel } from "../../repository/__test__/customer.repository.spec";
import { CustomerService } from "../customer.service";

describe("Customer Service", () => {
	const repositoryMock: CustomerRepository = {
		save: jest.fn(),
		getById: jest.fn(),
		getAll: jest.fn(),
		delete: jest.fn(),
		customerModel: customerModel,
	};

	const customerService = new CustomerService(repositoryMock);
	it("Should call save once", async () => {
		customerService.create({});
		expect(repositoryMock.save).toHaveBeenCalledTimes(1);
	});

	it("Should call getById once", async () => {
		customerService.getById(1);
		expect(repositoryMock.getById).toHaveBeenCalledTimes(1);
	});

	it("Should call getAll once", async () => {
		customerService.getAll();
		expect(repositoryMock.getAll).toHaveBeenCalledTimes(1);
	});

	it("Should call delete once", async () => {
		customerService.delete(1);
		expect(repositoryMock.delete).toHaveBeenCalledTimes(1);
	});
});
