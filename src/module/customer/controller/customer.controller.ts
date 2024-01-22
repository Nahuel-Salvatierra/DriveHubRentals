import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../application/service/customer.service";
import { CreateCustomerDto } from "../application/dto/create.customer.dto";

export class CustomerController {
	baseRoute = "/customer";
	private readonly customerService: CustomerService;
	constructor(customerService: CustomerService) {
		this.customerService = customerService;
	}
	configureRoutes(app: Application) {
		app.post(`${this.baseRoute}`, this.create.bind(this));
		app.get(`${this.baseRoute}`, this.getAll.bind(this));
		app.get(`${this.baseRoute}/:id`, this.getById.bind(this));
		app.put(`${this.baseRoute}/:id`, this.update.bind(this));
		app.delete(`${this.baseRoute}/:id`, this.delete.bind(this));
	}

	async create(req: Request, res: Response, next: NextFunction) {
		try {
			const newCustomer = new CreateCustomerDto(req.body);
			newCustomer.validate();
			const customerSaved = await this.customerService.create(
				newCustomer
			);
			res.send(customerSaved);
		} catch (error) {
			next(error);
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const customers = await this.customerService.getAll();
			res.send(customers);
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const customer = await this.customerService.getById(+id);
			res.send(customer);
		} catch (error) {
			next(error);
		}
	}

	async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const customer = await this.customerService.update(req.body, +id);
			res.send(customer);
		} catch (error) {
			next(error);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			await this.customerService.delete(+id);
			res.send("ok");
		} catch (error) {
			next(error);
		}
	}
}
