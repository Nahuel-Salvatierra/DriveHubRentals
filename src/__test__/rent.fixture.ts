import { Rent } from "../module/rent/domain/rent.entity";

export const sampleRent = new Rent(
	1,
	1,
	100,
	100,
	"credit card",
	true,
	new Date(),
	new Date(+7)
);

export const savedRent = {
	id: 1,
	customerId: 1,
	carId: 1,
	unitPrice: 99,
	totalPrice: 990,
	paymentMethod: "credit card",
	isPaid: false,
	startDate: new Date(),
	endDate: new Date(+7),
};

export const sampleRent1 = {
	customerId: 1,
	carId: 1,
	unitPrice: 90,
	totalPrice: 180,
	paymentMethod: "credit card",
	isPaid: false,
	startDate: new Date(),
	endDate: new Date(+2),
};
