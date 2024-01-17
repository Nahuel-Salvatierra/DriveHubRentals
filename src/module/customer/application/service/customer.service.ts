import Customer from "../../domain/customer.entity";
import { CustomerRepository } from "../../infrastructure/customer.repository";
import { UpdateCustomerDto } from "../dto/update.customer.dto";
import { fromDtoToEntity } from "../mapper/fromCustomerDtotoEntity";
import { ICustomerRepository } from "../repository/customer.repository.interface";

export class CustomerService {
	customerRepository: ICustomerRepository;
	constructor(customerRepository: ICustomerRepository) {
		this.customerRepository = customerRepository;
	}

	async create(customer: Customer) {
		const savedCustomer = await this.customerRepository.save(customer);
		return savedCustomer;
	}

	async getAll(): Promise<Customer[]> {
		const customers = await this.customerRepository.getAll();
		return customers;
	}

	async getById(customerId: number): Promise<Customer> {
		try {
			const customer = await this.customerRepository.getById(customerId);
			if (!customer) throw new Error("Customer not found");
			return customer;
		} catch (error) {
			throw error
		}
	}

	async update(
		updateCustomerDto: UpdateCustomerDto,
		customerId: number
	): Promise<Customer> {
		try {
			const customerToUpdate = await this.customerRepository.getById(
				customerId
			);
			const customer = fromDtoToEntity(updateCustomerDto);
			return await this.customerRepository.save(customer);
		} catch (error) {
			throw error;
		}
	}

	async delete(customerId: number): Promise<void> {
		try {
			await this.customerRepository.delete(customerId);
		} catch (error) {
			throw error;
		}
	}
}
