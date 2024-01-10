import { ICustomerRepository } from "../app/repository/customer.repository.interface";
import { CustomerModel } from "./customer.model";

export class CustomerRepository implements ICustomerRepository{
   customerModel:typeof CustomerModel
  constructor(customerModel:typeof CustomerModel){
    this.customerModel = customerModel
  }

  customerRepositoryFn(){
    this.customerModel.findByPk()
  }
}