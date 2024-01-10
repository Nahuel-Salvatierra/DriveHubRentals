import { Application } from "express";
import { IDIContainer } from "rsdi/dist/types";
import { CustomerController } from "./interface/customer.controller";
import { DIContainer } from "rsdi";

function initCustomerModule(app: Application, container:DIContainer) {
  const customerController: CustomerController = (container as IDIContainer).get(
    CustomerController as never
  );  customerController.configureRoutes(app);
}

export {
  initCustomerModule
}
