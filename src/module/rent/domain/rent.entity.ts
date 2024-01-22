import Car from "../../car/domain/car.entity";
import Customer from "../../customer/domain/customer.entity";

export class Rent {
	id?: number;
	carId: number;
	customerId: number;
	unitPrice: number;
	totalPrice: number;
	paymentMethod: string;
	isPaid: boolean;
	startDate: Date;
	endDate: Date;
	createdAt?: Date;
	updatedAt?: Date;
	car?: Car;
	customer?: Customer;

	available(): boolean {
		const endDate = this.endDate.getTime();
		const now = new Date().getTime();
		if (endDate > now) {
			return true;
		}
		return false;
	}

	constructor(
		carId: number,
		customerId: number,
		unitPrice: number,
		totalPrice: number,
		paymentMethod: string,
		isPaid: boolean,
		startDate: Date,
		endDate: Date
	) {
		this.carId = carId;
		this.customerId = customerId;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
		this.paymentMethod = paymentMethod;
		this.isPaid = isPaid;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
