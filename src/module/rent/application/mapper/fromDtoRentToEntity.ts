import { Rent } from "../../domain/rent.entity";
import { CreateRentDto } from "../dto/create.rent.dto";

export const fromRentDtoToEntity = ({
	carId,
	customerId,
	unitPrice,
	totalPrice,
	paymentMethod,
	isPaid,
	startDate,
	endDate,
}: CreateRentDto): Rent => {
	const newRent = new Rent();
	// newRent.carId = carId;
	// newRent.customerId = customerId;
	newRent.unitPrice = unitPrice;
	newRent.totalPrice = totalPrice;
	newRent.paymentMethod = paymentMethod;
	newRent.isPaid = isPaid;
	newRent.startDate = startDate;
	newRent.endDate = endDate;
	return newRent;
};
