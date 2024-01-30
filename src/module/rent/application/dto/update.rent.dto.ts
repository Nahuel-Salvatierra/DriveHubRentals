import { StatusEnum } from "../../domain/rent.entity";

export class UpdateRentDto {
	id?: number;
	carId?: number;
	customerId?: number;
	unitPrice?: number;
	totalPrice?: number;
	paymentMethod?: string;
	isPaid?: boolean;
	startDate?: Date;
	endDate?: Date;
	status?: StatusEnum;
	constructor(
		id?: number,
		carId?: number,
		customerId?: number,
		unitPrice?: number,
		totalPrice?: number,
		paymentMethod?: string,
		isPaid?: boolean,
		startDate?: Date,
		endDate?: Date,
		status?: StatusEnum
	) {
		this.id = id;
		this.carId = carId;
		this.customerId = customerId;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
		this.paymentMethod = paymentMethod;
		this.isPaid = isPaid;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
	}
}
