import {
	Model,
	Table,
	AutoIncrement,
	PrimaryKey,
	Column,
	AllowNull,
	NotEmpty,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

enum IdentificationEnum {
	dni = "dni",
	passport = "passport",
}

@Table({
	tableName: "customer",
	timestamps: true,
})
export default class Customer {
	id: number;
	name: string;
	lastName: string;
	documentType: IdentificationEnum;
	documentNumber: number;
	birthrate: Date;
	address: string;
	phone: number;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}
