import { fromCarModelToEntity } from "../app/mapper/fromCarModelToEntity";
import { ICarRepository } from "../app/repository/car.repository.interface";
import Car from "../domain/car.entity";
import { CarModel } from "./car.model";

export class CarRepository implements ICarRepository {
	carModel: typeof CarModel;
	constructor(carModel: typeof CarModel) {
		this.carModel = carModel;
	}
	async save(car: Car): Promise<Car> {
		const savedCar = this.carModel.build(
			{ ...car },
			{
				isNewRecord: !car.id,
			}
		);
		await savedCar.save();
		return fromCarModelToEntity(savedCar);
	}
	async getById(carId: number): Promise<Car> {
		const car = await this.carModel.findByPk(carId);
		if (car) return fromCarModelToEntity(car);
		throw Error("Car not found");
	}
	async getAll(): Promise<Car[]> {
		const cars = await this.carModel.findAll();
		return cars.map((car) => fromCarModelToEntity(car));
	}
	async delete(carId: number): Promise<boolean> {
		if (!carId) throw new Error("Car id not defined");
		const carDeleted = await this.carModel.destroy({
			where: { id: carId },
		});
		return Boolean(carDeleted);
	}
}
