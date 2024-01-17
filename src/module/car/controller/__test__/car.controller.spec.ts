import { NextFunction, Request, Response } from "express";
import { ICarRepository } from "../../app/repository/car.repository.interface";
import { CarController, CarService } from "../../car.module";
import { sampleCar } from "../../../../__test__/car.fixture";

describe("Car Controller", () => {
	const carRepository: ICarRepository = {
		save: jest.fn(),
		getById: jest.fn(),
		getAll: jest.fn(),
		delete: jest.fn(),
	};

	let serviceMock: CarService | any = {
		create: jest.fn(),
		getall: jest.fn(),
		getById: jest.fn(),
		update: jest.fn(),
		delete: jest.fn(),
		carRepository: carRepository,
	};

	const carController = new CarController(serviceMock);
	let req: Partial<Request> = {
		body: {},
		params: {
			id: "1",
		},
	};
	let res: Partial<Response> = {};
	let next: NextFunction = jest.fn();

	it("Should call create once", async () => {
		req.body = { ...sampleCar };
		carController.create(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(serviceMock.create).toHaveBeenCalledTimes(1);
		expect(serviceMock.create).toHaveBeenCalledWith(sampleCar);
	});

	it("Should call getall once", async () => {
		carController.getAll(
			req as Request,
			res as Response,
			next as NextFunction
		);
		expect(serviceMock.getall).toHaveBeenCalledTimes(1);
		expect(serviceMock.getall).toHaveBeenCalledWith();
	});

  it("Should call getById once", async () => {
    carController.getById(
      req as Request,
      res as Response,
      next as NextFunction
    );
    expect(serviceMock.getById).toHaveBeenCalledTimes(1);
    expect(serviceMock.getById).toHaveBeenCalledWith(1);
  })

  it("Should call update once", async () => {
    req.body = { ...sampleCar };
    carController.update(
      req as Request,
      res as Response,
      next as NextFunction
    );
    expect(serviceMock.update).toHaveBeenCalledTimes(1);
    expect(serviceMock.update).toHaveBeenCalledWith(sampleCar, 1);
  })

  it("Should call delete once", async () => {
    carController.delete(
      req as Request,
      res as Response,
      next as NextFunction
    );
    expect(serviceMock.delete).toHaveBeenCalledTimes(1);
    expect(serviceMock.delete).toHaveBeenCalledWith(1);
  })

  it("Should reject request on error", async () => {
    const error = new Error("Error");
    const mockFn = Promise.reject(error)
    serviceMock.getById.mockImplementation(() => mockFn)
    await carController.getById(
      req as Request,
      res as Response,
      next as NextFunction
    )
    expect(next).toHaveBeenCalledWith(error)
    expect(serviceMock.getById).toHaveBeenCalledWith(1)
  })
});
