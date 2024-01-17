import { DocumentTypeEnum } from "../../domain/customer.entity";

export class UpdateCustomerDto {
	name?: string;
	lastName?: string;
	documentType?: DocumentTypeEnum;
	documentNumber?: number;
	birthDate?: Date;
	address?: string;
	phone?: number;
	email?: string;
}
