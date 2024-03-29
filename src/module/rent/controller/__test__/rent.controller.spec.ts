import { NextFunction, Request, Response } from "express";
import { rentServiceMock } from "../../../../__test__/__mocks__/mocks";
import { RentController, RentService } from "../../rent.module";
import { sampleRent } from "../../../../__test__/fixtures/rent.fixture";
import { Rent } from "../../domain/rent.entity";

describe("Rent Controller", () => {
	let controller: RentController;
	let req: Partial<Request> = {
		body: sampleRent,
		params: {
			id: "1",
		},
	};
	let res: Partial<Response> = {};
	let next: NextFunction = jest.fn();

	beforeAll(() => {
		controller = new RentController(rentServiceMock as RentService);
	});
	it("Should create a new rent", async () => {
		await controller.create(req as Request, res as Response, next);
		expect(rentServiceMock.create).toHaveBeenCalledTimes(1);
		expect(rentServiceMock.create).toHaveBeenCalledWith(sampleRent);
	});

	it("Should get all rents", async () => {
		await controller.getAll(req as Request, res as Response, next);
		expect(rentServiceMock.getAll).toHaveBeenCalledTimes(1);
	});

	it("Should get a rent by ID", async () => {
		await controller.getById(req as Request, res as Response, next);
		expect(rentServiceMock.getById).toHaveBeenCalledTimes(1);
		expect(rentServiceMock.getById).toHaveBeenCalledWith(1);
	});
	it("Should delete a rent by ID", async () => {
		await controller.delete(req as Request, res as Response, next);
		expect(rentServiceMock.delete).toHaveBeenCalledTimes(1);
		expect(rentServiceMock.delete).toHaveBeenCalledWith(1);
	});

	it("Should update a rent by ID", async () => {
		const partialRent: Partial<Rent> = {
			unitPrice: 200,
			paymentMethod: "cash",
		};
		req.body = partialRent;
		await controller.update(req as Request, res as Response, next);
		expect(rentServiceMock.update).toHaveBeenCalledTimes(1);
	});
});
