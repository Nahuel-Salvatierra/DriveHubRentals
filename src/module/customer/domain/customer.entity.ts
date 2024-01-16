export enum DocumentTypeEnum {
	dni = "dni",
	passport = "passport",
}

export default class Customer {
	id?: number;
	name?: string;
	lastName?: string;
	documentType?: DocumentTypeEnum;
	documentNumber?: number;
	dateOfBirth?: Date;
	address?: string;
	phone?: number;
	email?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
