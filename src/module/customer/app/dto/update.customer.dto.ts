import { IdentificationEnum } from "../../domain/customer.entity";

export class UpdateCustomerDto {
	name?: string;
	lastName?: string;
	documentType?: IdentificationEnum;
	documentNumber?: number;
	dateOfBirth?: Date;
	address?: string;
	phone?: number;
	email?: string;
}
