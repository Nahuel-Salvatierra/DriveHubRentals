import { Rent } from "../../domain/rent.entity";
import { CreateRentDto } from "../dto/create.rent.dto";

export const fromRentDtoToEntity = ({
	id,
	carId,
	customerId,
	unitPrice,
	totalPrice,
	paymentMethod,
	isPaid,
	startDate,
	endDate,
	status,
}: CreateRentDto): Rent => {
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
	id? newRent.id = id : undefined;
	status? newRent.status = status : undefined;

	return newRent;
};
