import Car from "../../domain/car.entity";
import { UpdateCarDto } from "../dto/update.car.dto";
import { fromCarDtoToEntity } from "../mapper/fromCarDtoToEntity";
import { ICarRepository } from "../repository/car.repository.interface";

export class CarService {
	carRepository: ICarRepository;
	constructor(carRepository: ICarRepository) {
		this.carRepository = carRepository;
	}

	async create(car: Car) {
		const savedCar = await this.carRepository.save(car);
		return savedCar;
	}

	async getall(): Promise<Car[]> {
		const cars = await this.carRepository.getAll();
		return cars;
	}

	async getById(carId: number): Promise<Car> {
		try {
			const car = await this.carRepository.getById(carId);
			if (!car) throw new Error("Car not found");
			return car;
		} catch (error) {
			throw error;
		}
	}

	async update(updateCarDto: UpdateCarDto, carId: number): Promise<Car> {
		try {
			const carToUpdate = await this.carRepository.getById(carId);
			const car = fromCarDtoToEntity(updateCarDto);
			return await this.carRepository.save(car);
		} catch (error) {
			throw error;
		}
	}

	async delete(carId: number): Promise<void> {
		try {
			await this.carRepository.delete(carId);
		} catch (error) {
			throw error;
		}
	}
}
