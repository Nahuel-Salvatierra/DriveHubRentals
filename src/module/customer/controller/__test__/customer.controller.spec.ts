import { TsJestCompileOptions } from "ts-jest";
import { sampleCustomer } from "../../../../__test__/fixtures/customer.fixture";
import { ICustomerRepository } from "../../application/repository/customer.repository.interface";
import { CustomerService, CustomerController } from "../../customer.module";
import { NextFunction, Request, Response } from "express";

describe("Customer controller", () => {
	const customerRepository: ICustomerRepository = {
		save: jest.fn(),
		getById: jest.fn(),
		getAll: jest.fn(),
		delete: jest.fn(),
	};

	let serviceMock: CustomerService | any = {
		create: jest.fn(),
		getById: jest.fn(() => Promise.resolve({})),
		getAll: jest.fn(() => Promise.resolve([])),
		update: jest.fn(() => Promise.resolve({})),
		delete: jest.fn(() => Promise.resolve()),
		customerRepository: customerRepository,
	};

	let req: Partial<Request> = {
		body: {},
		params: {
			id: "1",
		},
	};
	let res: Partial<Response> = {};
	let next: NextFunction = jest.fn();

	const controller = new CustomerController(serviceMock);

	it("Should call create once", async () => {
		req.body = { ...sampleCustomer };
		await controller.create(req as Request, res as Response, next);
		expect(serviceMock.create).toHaveBeenCalledTimes(1);
	});

	it("Should call getById once", async () => {
		await controller.getById(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(serviceMock.getById).toHaveBeenCalledTimes(1);
	});

	it("should call getAll once", async () => {
		await controller.getAll(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(serviceMock.getAll).toHaveBeenCalledTimes(1);
	});

	it("Should call delete once", async () => {
		await controller.delete(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(serviceMock.delete).toHaveBeenCalledTimes(1);
	});

	it("Should reject request and throw error", async () => {
		const errorMessage = "Error test";
		const mockFn = Promise.reject(errorMessage);
		serviceMock.getById.mockImplementationOnce(() => mockFn);
		await controller.getById(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(next).toHaveBeenCalledWith(errorMessage);
		expect(serviceMock.getById).toHaveBeenCalledWith(expect.any(Number));
	});
});
