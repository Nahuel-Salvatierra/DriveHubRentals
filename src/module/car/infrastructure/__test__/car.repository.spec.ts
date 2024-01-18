import { sampleCar } from "../../../../__test__/car.fixture";
import {
	carModel,
	sequelizeInstance,
} from "../../../../__test__/config.jest";
import { CarRepository } from "../car.repository";

describe("Car Repository", () => {
	let repository: CarRepository;

	beforeAll(() => {
		repository = new CarRepository(carModel);
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a car", async () => {
		const newCar = await repository.save(sampleCar);
		expect(newCar.id).toEqual(1);
		expect(newCar.brand).toEqual(sampleCar.brand);
	});

	it("Should get all cars", async () => {
		await repository.save(sampleCar);
		const cars = await repository.getAll();
		expect(cars).toHaveLength(1);
	});

	it("Should get a car by id", async () => {
		await repository.save(sampleCar);
		const car = await repository.getById(1);
		expect(car.id).toEqual(1);
		expect(car.brand).toEqual(sampleCar.brand);
	});

	it("Should delete a car", async () => {
    await repository.save(sampleCar);
    const deleted = await repository.delete(1);
    expect(deleted).toBeTruthy();
  });

  it("Should throw an error if car not found", async () => {
    const checkDelete = await repository.delete(99);
    expect(checkDelete).toBeFalsy();
  })
});
