import { Application } from "express";
import { IDIContainer } from "rsdi/dist/types";
import { CustomerController } from "./interface/customer.controller";
import { DIContainer } from "rsdi";
import { CustomerService } from "./app/service/customer.service";
import { CustomerModel } from "./infrastructure/customer.model";
import { CustomerRepository } from "./infrastructure/customer.repository";

function initCustomerModule(app: Application, container:DIContainer) {
  const customerController: CustomerController = (container).get(
    "customerController" as never
  );  customerController.configureRoutes(app);
}

export {
  initCustomerModule,
  CustomerController,
  CustomerService,
  CustomerRepository,
  CustomerModel
}
