import Customer from "../../domain/customer.entity";

export const fromCustomerModelToEntity = ({
	id,
	name,
	lastName,
	documentType,
	documentNumber,
	birthDate,
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
	customerEntity.birthDate = birthDate;
	customerEntity.address = address;
	customerEntity.phone = phone;
	customerEntity.email = email;
	customerEntity.createdAt = createdAt;
	customerEntity.updatedAt = updatedAt;
	return customerEntity;
};
