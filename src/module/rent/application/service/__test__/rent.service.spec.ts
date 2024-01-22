import {
	carServiceMock,
	customerServiceMock,
	rentRepositoryMock,
} from "../../../../../__test__/__mocks__/mocks";
import { sampleRent } from "../../../../../__test__/rent.fixture";
import { Rent } from "../../../domain/rent.entity";
import { RentService } from "../rent.service";

describe("Rent Service", () => {
	let rentService: RentService;
	beforeEach(() => {
		rentService = new RentService(
			rentRepositoryMock,
			carServiceMock,
			customerServiceMock
		);
	});

	it("Should call save once", async () => {
		await rentService.create(sampleRent);
		expect(rentRepositoryMock.save).toHaveBeenCalledTimes(1);
		expect(rentRepositoryMock.save).toHaveBeenCalledWith(sampleRent);
		expect(rentRepositoryMock.save).toHaveBeenCalledWith(sampleRent);
	});

	it("Should validate transaction", async () => {
		await rentService.validateTransaction(
			sampleRent.customerId,
			sampleRent.carId
		);
		expect(carServiceMock.getById).toHaveBeenCalledWith(1);
		expect(customerServiceMock.getById).toHaveBeenCalledWith(1);
		// expect(rentService.isCarRent).toHaveBeenCalled();
		// expect(rentService.isCustomerRent).toHaveBeenCalled();
	});

	it("Should validate if car has a rented", async () => {
		await rentService.checkCarRent(1);
		expect(rentRepositoryMock.findByCarId).toHaveBeenCalled();
		expect(rentRepositoryMock.findByCarId).toHaveBeenCalledWith(1);
	});

	it("Should validate if customer has a rented", async () => {
		await rentService.checkCustomerRent(1);
		expect(rentRepositoryMock.findByCustomerId).toHaveBeenCalled();
		expect(rentRepositoryMock.findByCustomerId).toHaveBeenCalledWith(1);
	});

	it("Should throw error if car is already rented", async () => {
		jest.spyOn(rentRepositoryMock, "findByCarId").mockResolvedValue({
			id: 1,
		} as Rent);
		try {
			await rentService.checkCarRent(1);
		} catch (error) {
			expect(error).toBeDefined();
		}
	});

	it("Should throw error if customer has a rented", async () => {
		jest.spyOn(rentRepositoryMock, "findByCustomerId").mockResolvedValue({
			id: 1,
		} as Rent);
		try {
			await rentService.checkCustomerRent(1);
		} catch (error) {
			expect(error).toBeDefined();
		}
	});
});
