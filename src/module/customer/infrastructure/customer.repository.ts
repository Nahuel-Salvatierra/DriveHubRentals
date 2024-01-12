import { fromCustomerModelToEntity } from "../app/mapper/fromCustomerModelToEntity";
import { ICustomerRepository } from "../app/repository/customer.repository.interface";
import Customer from "../domain/customer.entity";
import { CustomerModel } from "./customer.model";

export class CustomerRepository implements ICustomerRepository {
	customerModel: typeof CustomerModel;
	constructor(customerModel: typeof CustomerModel) {
		this.customerModel = customerModel;
	}
	async saveCustomer(customer: Customer): Promise<Customer> {
		const savedCustomer = this.customerModel.build(
			{ ...customer },
			{
				isNewRecord: !customer.id,
			}
		);

		await savedCustomer.save();
		return fromCustomerModelToEntity(savedCustomer);
	}

	async getCustomerById(customerId: number): Promise<Customer> {
		const customer = await this.customerModel.findByPk(customerId);
		if (customer) return fromCustomerModelToEntity(customer);
		throw new Error('Customer not found')
	}

	async getAllCustomers():Promise<Customer[]> {
    const customers = await this.customerModel.findAll()
    return customers.map(customer => fromCustomerModelToEntity(customer))
  }

  async deleteCustomer() {}

	async getCustomerByEmail() {}
}
