import { NextFunction, Request, Response } from "express";
import { rentServiceMock } from "../../../../__test__/__mocks__/mocks";
import { RentController } from "../../rent.module";
import { sampleRent } from "../../../../__test__/rent.fixture";

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
		controller = new RentController(rentServiceMock);
	});
	it("Should create a new rent", async () => {
		await controller.create(
			req as Request,
			res as Response,
			next
		);
		expect(rentServiceMock.create).toHaveBeenCalledTimes(1);
		expect(rentServiceMock.create).toHaveBeenCalledWith(sampleRent)
	});

	it("Should get all rents", async () => {
		await controller.getAll(req as Request, res as Response, next);
		expect(rentServiceMock.getAll).toHaveBeenCalledTimes(1);
	})

	it("Should get a rent by ID", async () => {
		await controller.getById(req as Request, res as Response, next);
		expect(rentServiceMock.getById).toHaveBeenCalledTimes(1);
		expect(rentServiceMock.getById).toHaveBeenCalledWith(1)
	})
});
