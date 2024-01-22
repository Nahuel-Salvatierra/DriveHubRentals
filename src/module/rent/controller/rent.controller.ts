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
		app.get(`${this.baseRoute}`, this.getAll.bind(this));
		app.get(`${this.baseRoute}/:id`, this.getById.bind(this));
		app.put(`${this.baseRoute}/:id`, this.update.bind(this));
		app.delete(`${this.baseRoute}/:id`, this.delete.bind(this));
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

	async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		const newRent = new CreateRentDto({...req.body, id: id});
		try {
			newRent.validate();
			const rent = fromRentDtoToEntity(newRent);
			const rentUpdated = await this.rentService.update(rent, +id);
			res.send(rentUpdated);
		} catch (error) {
			next(error);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			await this.rentService.delete(+id);
			res.send("ok").status(200);
		} catch (error) {
			next(error);
		}
	}
}
