import Customer from "../../domain/customer.entity";

export interface ICustomerRepository {
	save(customer: Customer): Promise<Customer>;
	getById(customerId: number): Promise<Customer | null>
	getAll():Promise<Customer[]>
	delete(id: number): Promise<Boolean>
}
