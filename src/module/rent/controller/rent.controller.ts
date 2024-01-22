import { Application, Request, Response, NextFunction } from "express";
import { RentService } from "../rent.module";
import { CreateRentDto } from "../application/dto/create.rent.dto";
import { fromRentDtoToEntity } from "../application/mapper/fromDtoRentToEntity";

export class RentController {
	baseRoute = "/rent";
	private readonly rentService: RentService;
	constructor(rentService: RentService) {
		this.rentService = rentService;
	}
	configureRoutes(app: Application) {
		app.post(`${this.baseRoute}/create`, this.create.bind(this));
		app.get(`${this.baseRoute}`);
		app.get(`${this.baseRoute}/:id`);
		app.put(`${this.baseRoute}/:id`);
		app.delete(`${this.baseRoute}/:id`);
	}

	async create(req: Request, res: Response, next: NextFunction) {
		const newRent = new CreateRentDto(req.body);
		try {
			newRent.validate();
			const rent = fromRentDtoToEntity(newRent);
			const rentSaved = await this.rentService.create(rent);
			res.send(rentSaved);
		} catch (error) {
			next(error);
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const rents = await this.rentService.getAll();
			res.send(rents);
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const rent = await this.rentService.getById(+id);
			res.send(rent);
		} catch (error) {
			next(error);
		}
	}
}
