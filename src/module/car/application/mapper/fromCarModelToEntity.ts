import Car from "../../domain/car.entity";

export const fromCarModelToEntity = ({
	id,
	brand,
	model,
	year,
	kms,
	color,
	AC,
	passengers,
	transmission,
	createdAt,
	updateAt,
}: any): Car => {
	const carEntity = new Car();
	carEntity.id = id;
	carEntity.brand = brand;
	carEntity.model = model;
	carEntity.year = year;
	carEntity.kms = kms;
	carEntity.color = color;
	carEntity.AC = AC;
	carEntity.passengers = passengers;
	carEntity.transmission = transmission;
	carEntity.createdAt = createdAt;
	carEntity.updatedAt = updateAt;
	return carEntity;
};
