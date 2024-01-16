import { DocumentTypeEnum } from "../../domain/customer.entity";

export class CreateCustomerDto {
	name: string;
	lastName: string;
	documentType: DocumentTypeEnum;
	documentNumber: number;
	dateOfBirth: Date;
	address: string;
	phone: number;
	email: string;

	constructor({
		name,
		lastName,
		documentType,
		documentNumber,
		dateOfBirth,
		address,
		phone,
		email,
	}: {
		name: string;
		lastName: string;
		documentType: DocumentTypeEnum;
		documentNumber: number;
		dateOfBirth: Date;
		address: string;
		phone: number;
		email: string;
	}) {
		this.name = name;
		this.lastName = lastName;
		this.documentType = documentType;
		this.documentNumber = documentNumber;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.phone = phone;
		this.email = email;
	}

	validate() {
		if (this.name === undefined) {
			throw new Error("Validation error");
		}
		if (this.lastName === undefined) {
			throw new Error("Validation error");
		}
		if (this.documentType === undefined) {
			throw new Error("Validation error");
		}
		if (this.documentNumber === undefined) {
			throw new Error("Validation error");
		}
		if (this.dateOfBirth === undefined) {
			throw new Error("Validation error");
		}
		if (this.address === undefined) {
			throw new Error("Validation error");
		}
		if (this.phone === undefined) {
			throw new Error("Validation error");
		}
		if (this.email === undefined) {
			throw new Error("Validation error");
		}
	}
}
