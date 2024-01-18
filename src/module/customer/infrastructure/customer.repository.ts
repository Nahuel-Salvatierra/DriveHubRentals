import { fromCustomerModelToEntity } from "../application/mapper/fromCustomerModelToEntity";
import { ICustomerRepository } from "../application/repository/customer.repository.interface";
import Customer from "../domain/customer.entity";
import { CustomerModel } from "./customer.model";

export class CustomerRepository implements ICustomerRepository {
	customerModel: typeof CustomerModel;
	constructor(customerModel: typeof CustomerModel) {
		this.customerModel = customerModel;
	}
	async save(customer: Customer): Promise<Customer> {
		const savedCustomer = this.customerModel.build(
			{ ...customer },
			{
				isNewRecord: !customer.id,
			}
		);
		await savedCustomer.save();
		return fromCustomerModelToEntity(savedCustomer);
	}

	async getById(customerId: number): Promise<Customer> {
		const customer = await this.customerModel.findByPk(customerId);
		if (customer) return fromCustomerModelToEntity(customer);
		throw new Error("Customer not found");
	}

	async getAll(): Promise<Customer[]> {
		const customers = await this.customerModel.findAll();
		return customers.map((customer) => fromCustomerModelToEntity(customer));
	}

	async delete(carId: number): Promise<Boolean> {
		if (!carId) throw new Error("Customer id not defined");
		const customerDeleted = await this.customerModel.destroy({
			where: { id: carId },
		});
		return Boolean(customerDeleted);
	}
}
