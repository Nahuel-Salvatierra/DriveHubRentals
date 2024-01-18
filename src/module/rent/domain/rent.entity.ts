import Car from "../../car/domain/car.entity";
import Customer from "../../customer/domain/customer.entity";

export class Rent {
	id?: number;
	car?: Car
	customer?: Customer;
	unitPrice?: number;
	totalPrice?: number;
	paymentMethod?: string;
	isPaid?: boolean;
	startDate?: Date;
	endDate?: Date;
	createdAt?: Date;
	updatedAt?: Date;
}
