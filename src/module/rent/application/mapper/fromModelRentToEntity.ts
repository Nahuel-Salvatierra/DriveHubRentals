import { fromCarModelToEntity } from "../../../car/application/mapper/fromCarModelToEntity";
import { fromCustomerModelToEntity } from "../../../customer/application/mapper/fromCustomerModelToEntity";
import { Rent } from "../../domain/rent.entity";

export function fromModelRentToEntity({
	id,
	unitPrice,
	carId,
	customerId,
	totalPrice,
	paymentMethod,
	isPaid,
	startDate,
	endDate,
	createdAt,
	updatedAt,
	Car,
	Customer,
}: any): Rent {
	const newRent = new Rent();
	newRent.id = id;
	newRent.carId = carId;
	newRent.customerId = customerId;
	newRent.unitPrice = unitPrice;
	newRent.totalPrice = totalPrice;
	newRent.paymentMethod = paymentMethod;
	newRent.isPaid = isPaid;
	newRent.startDate = startDate;
	newRent.endDate = endDate;
	newRent.createdAt = createdAt;
	newRent.updatedAt = updatedAt;
	newRent.car = Car ? fromCarModelToEntity(Car):undefined;
	newRent.customer = Customer ? fromCustomerModelToEntity(Customer):undefined;
	return newRent;
}
