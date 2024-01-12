export enum IdentificationEnum {
	dni = "dni",
	passport = "passport",
}

export default class Customer {
	id?: number;
	name?: string;
	lastName?: string;
	documentType?: IdentificationEnum;
	documentNumber?: number;
	birthrate?: Date;
	address?: string;
	phone?: number;
	email?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
