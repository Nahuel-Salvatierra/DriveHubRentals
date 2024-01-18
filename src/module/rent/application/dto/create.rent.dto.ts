export class CreateRentDto {
	carId: number;
	customerId: number;
	unitPrice: number;
	totalPrice: number;
	paymentMethod: string;
	isPaid: boolean;
	startDate: Date;
	endDate: Date;

	constructor({
		carId,
		customerId,
		unitPrice,
		totalPrice,
		paymentMethod,
		isPaid,
		startDate,
		endDate,
	}) {
		this.carId = carId;
		this.customerId = customerId;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
		this.paymentMethod = paymentMethod;
		this.isPaid = isPaid;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	validate() {
		if (!this.carId) throw new Error("Car id not defined");
		if (!this.customerId) throw new Error("Customer id not defined");
		if (!this.unitPrice) throw new Error("Unit price not defined");
		if (!this.totalPrice) throw new Error("Total price not defined");
		if (!this.paymentMethod) throw new Error("Payment method not defined");
		if (!this.isPaid) throw new Error("Is paid not defined");
		if (!this.startDate) throw new Error("Start date not defined");
		if (!this.endDate) throw new Error("End date not defined");
	}
}
