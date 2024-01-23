import { sampleCar } from "../../../../../__test__/fixtures/car.fixture";
import { carModel } from "../../../../../__test__/config.jest";
import { CarRepository } from "../../../car.module";
import { CarService } from "../car.service";

describe("Car service", () => {
	const repositoryMock: CarRepository = {
		save: jest.fn(()=>Promise.resolve({})),
    getById: jest.fn(()=>Promise.resolve({})),
    getAll: jest.fn(()=>Promise.resolve([])),
    delete: jest.fn(()=>Promise.resolve(true)),
    carModel: carModel
	};

  const carService = new CarService(repositoryMock);
	it("Should call save once", async () => {
    carService.create(sampleCar);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledWith(sampleCar);
  });

  it("Should call getById once", async () => {
    carService.getById(1);
    expect(repositoryMock.getById).toHaveBeenCalledTimes(1);
    expect(repositoryMock.getById).toHaveBeenCalledWith(1);
  })

  it("Should call getAll once", async () => {
    carService.getall();
    expect(repositoryMock.getAll).toHaveBeenCalledTimes(1);
  })

  it("Should call delete once", async () => {
    carService.delete(1);
    expect(repositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(repositoryMock.delete).toHaveBeenCalledWith(1);
  })
});
