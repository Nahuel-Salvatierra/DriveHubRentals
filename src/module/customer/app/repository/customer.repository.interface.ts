import Customer from "../../domain/customer.entity";

export interface ICustomerRepository {
	saveCustomer(customer: Customer): Promise<Customer>;
	getCustomerById(customerId: number): Promise<Customer | null>
	getAllCustomers():Promise<Customer[]>
}
