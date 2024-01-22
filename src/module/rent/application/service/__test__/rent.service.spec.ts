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
		const totalPrice = jest.spyOn(rentService, "setTotalPrice");
		const validate = jest.spyOn(rentService, "validateTransaction");
		await rentService.create(sampleRent);
		expect(rentRepositoryMock.save).toHaveBeenCalledTimes(1);
		expect(rentRepositoryMock.save).toHaveBeenCalledWith(sampleRent);
		expect(totalPrice).toHaveBeenCalled();
		expect(validate).toHaveBeenCalled();
	});

	it("Should validate transaction", async () => {
		const checkCar = jest.spyOn(rentService, "checkCarRent")
		const checkCustomer = jest.spyOn(rentService, "checkCustomerRent")
		await rentService.validateTransaction(
			sampleRent.customerId,
			sampleRent.carId
		);
		expect(carServiceMock.getById).toHaveBeenCalledWith(1);
		expect(customerServiceMock.getById).toHaveBeenCalledWith(1);
		expect(checkCar).toHaveBeenCalled();
		expect(checkCustomer).toHaveBeenCalled();
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

	it("Should throw error car in rent has status pending", async () => {
		jest.spyOn(rentRepositoryMock, "findByCarId").mockResolvedValue({
			id: 1,
			status: "pending",
		} as Rent);
		try {
			await rentService.checkCarRent(1);
		} catch (error) {
			expect(error).toBeDefined();
		}
	});

	it("Should throw error customer in rent has status pending", async () => {
		jest.spyOn(rentRepositoryMock, "findByCustomerId").mockResolvedValue({
			id: 1,
			status: "pending",
		} as Rent);
		try {
			await rentService.checkCarRent(1);
		} catch (error) {
			expect(error).toBeDefined();
		}
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

	it("Should be false when car is available", async () => {
	 const result = await rentService.checkCarRent(99);
	 expect(result).toBe(false);
	})
	
	it("Should be false when customer is available", async () => {
		const result = await rentService.checkCustomerRent(99);
		expect(result).toBe(false);
	 })
 
	it("Should set total price", () => {
		const totalPrice = rentService.setTotalPrice(
			new Date("2022-10-20 10:23:42"),
			new Date("2022-10-10 10:30:32"),
			90
		);
		expect(totalPrice).toBe(900);
	})
});
