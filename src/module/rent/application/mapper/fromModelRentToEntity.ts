import { fromCarModelToEntity } from "../../../car/application/mapper/fromCarModelToEntity";
import Car from "../../../car/domain/car.entity";
import { fromCustomerModelToEntity } from "../../../customer/application/mapper/fromCustomerModelToEntity";
import Customer from "../../../customer/domain/customer.entity";
import { Rent } from "../../domain/rent.entity";
import { RentModel } from "../../rent.module";

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
}: any): Rent {
	const newRent = new Rent();
	newRent.id = id;
	newRent.carId = carId
	newRent.customerId = customerId
	newRent.unitPrice = unitPrice;
	newRent.totalPrice = totalPrice;
	newRent.paymentMethod = paymentMethod;
	newRent.isPaid = isPaid;
	newRent.startDate = startDate;
	newRent.endDate = endDate;
	newRent.createdAt = createdAt;
	newRent.updatedAt = updatedAt;
	return newRent;
}
