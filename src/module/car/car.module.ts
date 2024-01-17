import { Application } from "express";
import { DIContainer } from "rsdi";
import { CarController } from "./controller/car.controller";
import { CarService } from "./application/service/car.service";
import { CarRepository } from "./infrastructure/car.repository";
import { CarModel } from "./infrastructure/car.model";

function initCarModule(app:Application, container:DIContainer){
  const carController:CarController = (container).get("carController" as never)
  carController.configureRotes(app)
}

export {
  initCarModule,
  CarController,
  CarService,
  CarRepository,
  CarModel
}