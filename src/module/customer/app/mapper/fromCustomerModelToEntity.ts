import Customer from "../../domain/customer.entity";

export const fromCustomerModelToEntity = ({
	id,
	name,
	lastName,
	documentType,
	documentNumber,
	dateOfBirth,
	address,
	phone,
	email,
	createdAt,
	updatedAt,
}: any): Customer => {
	const customerEntity = new Customer();
	customerEntity.id = id;
	customerEntity.name = name;
	customerEntity.lastName = lastName;
	customerEntity.documentType = documentType;
	customerEntity.documentNumber = documentNumber;
	customerEntity.dateOfBirth = dateOfBirth;
	customerEntity.address = address;
	customerEntity.phone = phone;
	customerEntity.email = email;
	customerEntity.createdAt = createdAt;
	customerEntity.updatedAt = updatedAt;
	return customerEntity;
};
