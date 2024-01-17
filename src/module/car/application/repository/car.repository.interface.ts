import Car from "../../domain/car.entity";

export interface ICarRepository {
	save(car: Car): Promise<Car>;
	getById(carId:number):Promise<Car>
	getAll():Promise<Car[]>
	delete(carId:number):Promise<boolean>
}
