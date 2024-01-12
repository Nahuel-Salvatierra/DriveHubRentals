import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../app/service/customer.service";
import { CreateCustomerDto } from "../app/dto/create.customer.dto";

export class CustomerController {
	baseRoute = "/customer";
	private readonly customerService: CustomerService;
	constructor(customerService: CustomerService) {
		this.customerService = customerService;
	}
	configureRoutes(app: Application) {
		console.log("Routes set");
		app.post(`${this.baseRoute}/create`, this.create.bind(this));
		app.get(`${this.baseRoute}`, this.getAllCustomers.bind(this));
		app.get(`${this.baseRoute}/:id`, this.getCustomerById.bind(this));
		app.put(`${this.baseRoute}/:id`, this.updateCustomer.bind(this));
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

	async getAllCustomers(req: Request, res: Response, next: NextFunction) {
		try {
			const customers = await this.customerService.getAllCustomers();
			res.send(customers);
		} catch (error) {
			next(error);
		}
	}

	async getCustomerById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const customer = await this.customerService.getCustomerById(+id);
			res.send(customer);
		} catch (error) {
			next(error);
		}
	}

	async updateCustomer(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			const customer = await this.customerService.getCustomerById(+id);
			res.send(customer);
		} catch (error) {
			next(error);
		}
	}
}
