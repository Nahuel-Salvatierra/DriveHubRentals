import { RentModel } from "./infrastructure/rent.model";
import { RentRepository } from "./infrastructure/rent.repository";
import { RentService } from "./application/service/rent.service";
import { Application } from "express";
import { DIContainer } from "rsdi";
import { RentController } from "./controller/rent.controller";

function initRenModule(app: Application, container: DIContainer) {
	const rentController: RentController = container.get(
		"rentController" as never
	);
	rentController.configureRoutes(app);
}

export {
	initRenModule,
	RentModel,
	RentRepository,
	RentService,
	RentController,
};
