import Customer from "../../domain/customer.entity";
import { CustomerRepository } from "../../infrastructure/customer.repository";
import { UpdateCustomerDto } from "../dto/update.customer.dto";
import { fromDtoToEntity } from "../mapper/fromCustomerDtotoEntity";

export class CustomerService {
	private readonly customerRepository: CustomerRepository;
	constructor(customerRepository: CustomerRepository) {
		this.customerRepository = customerRepository;
	}

	async create(customer:Customer) {
		const savedCustomer = await this.customerRepository.saveCustomer(
			customer
		);
		return savedCustomer;
	}

	async getAllCustomers(): Promise<Customer[]> {
		const customers = await this.customerRepository.getAllCustomers();
		return customers;
	}

	async getCustomerById(customerId: number): Promise<Customer> {
		try {
			const customer = await this.customerRepository.getCustomerById(
				customerId
			);
			if (!customer) throw new Error("Customer not found");
			return customer;
		} catch (error) {
			throw error;
		}
	}

	async updateCustomer(
		updateCustomerDto: UpdateCustomerDto,
		customerId: number
	): Promise<Customer> {
		try {
			const customerToUpdate =
				await this.customerRepository.getCustomerById(customerId);
			const customer = fromDtoToEntity(updateCustomerDto);
			return await this.customerRepository.saveCustomer(customer);
		} catch (error) {
			throw error;
		}
	}
}
