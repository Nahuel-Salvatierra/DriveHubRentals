import { Rent } from "../../domain/rent.entity";
import { RentModel } from "../../rent.module";

export function fromModelRentToEntity({
	id,
	carId,
	unitPrice,
	totalPrice,
	paymentMethod,
	isPaid,
	customerId,
	startDate,
	endDate,
	createdAt,
	updatedAt,
}: any): Rent {
	const newRent = new Rent();
	newRent.id = id;
	newRent.carId = carId;
	newRent.unitPrice = unitPrice;
	newRent.totalPrice = totalPrice;
	newRent.paymentMethod = paymentMethod;
	newRent.isPaid = isPaid;
	newRent.customerId = customerId;
	newRent.startDate = startDate;
	newRent.endDate = endDate;
	newRent.createdAt = createdAt;
	newRent.updatedAt = updatedAt;
	return newRent;
}
