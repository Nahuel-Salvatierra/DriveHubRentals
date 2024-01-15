import { IdentificationEnum } from "../../domain/customer.entity";

export class UpdateCustomerDto {
	name?: string;
	lastName?: string;
	documentType?: IdentificationEnum;
	documentNumber?: number;
	birthrate?: Date;
	address?: string;
	phone?: number;
	email?: string;
}