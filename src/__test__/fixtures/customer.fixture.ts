import Customer, {
	DocumentTypeEnum,
} from "../../module/customer/domain/customer.entity";

export const sampleCustomer = new Customer();
sampleCustomer.name = "name";
sampleCustomer.lastName = "lastName";
sampleCustomer.address = "address";
sampleCustomer.documentType = DocumentTypeEnum.dni;
sampleCustomer.documentNumber = 12345678;
sampleCustomer.birthDate = new Date();
sampleCustomer.email = "email@mainModule.com";
sampleCustomer.phone = 1112345678;

export const savedCustomer = new Customer();
savedCustomer.id = 3;
savedCustomer.name = "name";
savedCustomer.lastName = "lastName";
savedCustomer.address = "address";
savedCustomer.documentType = DocumentTypeEnum.dni;
savedCustomer.documentNumber = 12345678;
savedCustomer.birthDate = new Date();
savedCustomer.email = "email@mainModule.com";
savedCustomer.phone = 1112345678;

export const sampleCustomer1 = new Customer();
sampleCustomer1.name = "sampleCustomer1";
sampleCustomer1.lastName = "sampleCustomer1";
sampleCustomer1.address = "sampleCustomer1";
sampleCustomer1.documentType = DocumentTypeEnum.dni;
sampleCustomer1.documentNumber = 12345678;
sampleCustomer1.birthDate = new Date();
sampleCustomer1.email = "sampleCustomer1@mail.com";
sampleCustomer1.phone = 1100120012;


