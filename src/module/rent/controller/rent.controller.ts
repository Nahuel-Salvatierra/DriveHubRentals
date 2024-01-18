import { Application } from "express";
import { RentService } from "../rent.module";

export class RentController {
	baseRoute = "/rent";
	private readonly rentService: RentService;
	constructor(rentService: RentService) {
		this.rentService = rentService;
	}
  configureRoutes(app:Application){
    app.post(`${this.baseRoute}/create`);
    app.get(`${this.baseRoute}`);
    app.get(`${this.baseRoute}/:id`);
    app.put(`${this.baseRoute}/:id`);
    app.delete(`${this.baseRoute}/:id`);
  }
}
