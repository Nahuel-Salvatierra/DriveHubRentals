import { Application } from "express";
import { CustomerController } from "./controller/customer.controller";
import { DIContainer } from "rsdi";
import { CustomerService } from "./application/service/customer.service";
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
