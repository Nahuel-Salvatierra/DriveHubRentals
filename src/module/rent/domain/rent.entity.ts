import Car from "../../car/domain/car.entity";
import Customer from "../../customer/domain/customer.entity";

export class Rent {
	id?: number;
	carId?: number;
	customerId?: number;
	unitPrice?: number;
	totalPrice?: number;
	paymentMethod?: string;
	isPaid?: boolean;
	startDate?: Date;
	endDate?: Date;
	createdAt?: Date;
	updatedAt?: Date;
	car?: Car;
	customer?: Customer;
}
