import { CustomerRepository, CustomerService } from "../../../customer.module";
import { customerModel } from "../../repository/__test__/customer.repository.spec";

describe("Customer Service", () => {
	
	const repositoryMock: CustomerRepository = {
		save: jest.fn(()=>Promise.resolve({})),
		getById: jest.fn(()=>Promise.resolve({})),
		getAll: jest.fn(()=>Promise.resolve([])),
		delete: jest.fn(()=>Promise.resolve(true)),
		customerModel: customerModel
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
