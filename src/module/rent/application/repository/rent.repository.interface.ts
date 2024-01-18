import { Rent } from "./../../domain/rent.entity";
export interface IRentRepository {
	getAll(): Promise<Rent[]>;
	getById(rentId: number): Promise<Rent>;
	save(rent: Rent): Promise<Rent>;
	delete(rentId: number): Promise<boolean>;
	findByCarId(carId: number): Promise<Rent>;
	findByCustomerId(customerId: number);
}
