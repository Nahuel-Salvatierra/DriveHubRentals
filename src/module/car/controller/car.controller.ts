import { Application, NextFunction, Request, Response } from "express";
import { CarService } from "../application/service/car.service";
import { CreateCarDto } from "../application/dto/create.car.dto";
import { fromCarDtoToEntity } from "../application/mapper/fromCarDtoToEntity";

export class CarController {
	baseRoute = "/car";
	private readonly carService: CarService;
	constructor(carService: CarService) {
		this.carService = carService;
	}
	configureRoutes(app: Application) {
		app.post(`${this.baseRoute}/create`, this.create.bind(this));
		app.get(`${this.baseRoute}`, this.getAll.bind(this));
		app.get(`${this.baseRoute}/:id`, this.getById.bind(this));
		app.delete(`${this.baseRoute}`, this.delete.bind(this));
		app.put(`${this.baseRoute}`, this.update.bind(this));
	}

	async create(req: Request, res: Response, next: NextFunction) {
		const newCar = new CreateCarDto(req.body);
		try {
			newCar.validate();
			const car = fromCarDtoToEntity(req.body);
			const carSaved = await this.carService.create(car);
			res.send(carSaved);
		} catch (error) {
			next(error);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			await this.carService.delete(+id);
			res.send("ok");
		} catch (error) {
			next(error);
		}
	}

	async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		const car = fromCarDtoToEntity(req.body);
		try {
			const carUpdated = await this.carService.update(car, +id);
			res.send(carUpdated);
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const car = await this.carService.getById(+id);
			res.send(car);
		} catch (error) {
			next(error);
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const cars = await this.carService.getall();
			res.send
		} catch (error) {
			next(error);
		}
	}
}
