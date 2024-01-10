import { Application } from "express";
import { CustomerService } from "../app/service/customer.service";

export class CustomerController {
	baseRoute = '/customer'
	constructor(private customerService: CustomerService) {}

	configureRoutes(app:Application){
		app.post(`${this.baseRoute}`,this.create.bind(this))
	}

	async create(){
		this.customerService.create()
	}
}
