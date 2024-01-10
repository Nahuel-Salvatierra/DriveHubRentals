import { CustomerRepository } from "../../infrastructure/customer.repository";

export class CustomerService{
  private readonly customerRepository:CustomerRepository
  constructor(customerRepository:CustomerRepository){
    this.customerRepository = customerRepository
  }

  async create(){
    return 'Hello service'
  }
}