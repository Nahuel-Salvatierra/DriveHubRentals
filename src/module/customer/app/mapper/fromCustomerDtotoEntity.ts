import Customer from "../../domain/customer.entity";
import { CreateCustomerDto } from "../dto/create.customer.dto";
import { UpdateCustomerDto } from "../dto/update.customer.dto";

export function fromDtoToEntity(
	customer: CreateCustomerDto | UpdateCustomerDto
): Customer {
	const customerEntity = new Customer();
	customerEntity.name = customer?.name;
	customerEntity.lastName = customer?.lastName;
	customerEntity.documentType = customer?.documentType;
	customerEntity.documentNumber = customer?.documentNumber;
	customerEntity.dateOfBirth = customer?.dateOfBirth;
	customerEntity.address = customer?.address;
	customerEntity.phone = customer?.phone;
	customerEntity.email = customer?.email;
	return customerEntity;
}
