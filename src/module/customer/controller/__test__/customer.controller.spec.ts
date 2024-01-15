import {
	sampleCustomer,
	savedCustomer,
} from "../../../../__test__/customer.fixture";
import { ICustomerRepository } from "../../app/repository/customer.repository.interface";
import { CustomerService } from "../../customer.module";
import { CustomerController } from "../customer.controller";
import { NextFunction, Request, Response } from "express";

describe("Customer controller", () => {
	const customerRepository: ICustomerRepository = {
		save: jest.fn(),
		getById: jest.fn(),
		getAll: jest.fn(),
		delete: jest.fn(),
	};

	const serviceMock: CustomerService = {
		create: jest.fn(),
		getById: jest.fn(() => Promise.resolve({})),
		getAll: jest.fn(() => Promise.resolve([])),
		update: jest.fn(() => Promise.resolve({})),
		delete: jest.fn(() => Promise.resolve()),
		get customerRepository() {
			return customerRepository;
		},
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
});
