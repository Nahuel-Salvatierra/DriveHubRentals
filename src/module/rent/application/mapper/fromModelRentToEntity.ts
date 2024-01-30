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
	status,
	startDate,
	endDate,
	createdAt,
	updatedAt,
	Car,
	Customer,
}: any): Rent {
	const newRent = new Rent(
		carId,
		customerId,
		unitPrice,
		totalPrice,
		paymentMethod,
		isPaid,
		startDate,
		endDate
	);
	newRent.id = id ? id : undefined;
	newRent.createdAt = createdAt;
	newRent.updatedAt = updatedAt;
	newRent.status = status ? status : undefined;
	newRent.car = Car ? fromCarModelToEntity(Car) : undefined;
	newRent.customer = Customer ? fromCustomerModelToEntity(Customer) : undefined;
	return newRent;
}
