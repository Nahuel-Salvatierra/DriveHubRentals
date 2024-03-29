import { DocumentTypeEnum } from "../../domain/customer.entity";

export class CreateCustomerDto {
	name: string;
	lastName: string;
	documentType: DocumentTypeEnum;
	documentNumber: number;
	birthDate: Date;
	address: string;
	phone: number;
	email: string;

	constructor({
		name,
		lastName,
		documentType,
		documentNumber,
		birthDate,
		address,
		phone,
		email,
	}: {
		name: string;
		lastName: string;
		documentType: DocumentTypeEnum;
		documentNumber: number;
		birthDate: Date;
		address: string;
		phone: number;
		email: string;
	}) {
		this.name = name;
		this.lastName = lastName;
		this.documentType = documentType;
		this.documentNumber = documentNumber;
		this.birthDate = birthDate;
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
		if (this.birthDate === undefined) {
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
