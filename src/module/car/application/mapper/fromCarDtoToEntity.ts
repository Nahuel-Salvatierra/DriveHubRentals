import Car from "../../domain/car.entity";
import { CreateCarDto } from "../dto/create.car.dto";
import { UpdateCarDto } from "../dto/update.car.dto";

export function fromCarDtoToEntity(car: CreateCarDto | UpdateCarDto): Car {
	const carEntity = new Car();
	carEntity.brand = car?.brand;
	carEntity.model = car?.model;
	carEntity.year = car?.year;
	carEntity.kms = car?.kms;
	carEntity.color = car?.color;
	carEntity.AC = car?.AC;
	carEntity.passengers = car?.passengers;
	carEntity.transmission = car?.transmission;
	return carEntity;
}
