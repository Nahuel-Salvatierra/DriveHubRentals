import {
	carServiceMock,
	customerServiceMock,
	rentRepositoryMock,
} from "../../../../../__test__/__mocks__/mocks";
import {
	sequelizeInstance,
} from "../../../../../__test__/config.jest";
import { sampleRent } from "../../../../../__test__/rent.fixture";
import { Rent } from "../../../domain/rent.entity";
import { UpdateRentDto } from "../../dto/update.rent.dto";
import { RentService } from "../rent.service";

describe("Rent Service", () => {
	let rentService: RentService;
	beforeEach(() => {
		rentService = new RentService(
			rentRepositoryMock,
			carServiceMock,
			customerServiceMock
		);
		sequelizeInstance.sync({ force: true });
	});

	afterEach(()=>{
		jest.clearAllMocks();
	})

	it("Should call save once", async () => {
		const totalPrice = jest.spyOn(rentService, "setTotalPrice");
		await rentService.create(sampleRent);
		expect(rentRepositoryMock.save).toHaveBeenCalledTimes(1);
		expect(totalPrice).toHaveBeenCalled();
	});

	it("Should validate if car has a rented", async () => {
		jest.spyOn(rentRepositoryMock, "findByCarId").mockResolvedValue({
			id: 1,
			status: "pending",
		} as Rent )
		jest.spyOn(rentRepositoryMock, "findByCustomerId").mockResolvedValue(null)
		try {
			await rentService.create(sampleRent);
		} catch (error) {
			expect(error).toBeDefined()
		}
		expect(rentRepositoryMock.findByCarId).toHaveBeenCalled();
		expect(rentRepositoryMock.findByCarId).toHaveBeenCalledWith(1);
	});

	it("Should validate if customer has a rented", async () => {
		jest.spyOn(rentRepositoryMock, "findByCustomerId").mockResolvedValue({
			id: 1,
			status: "pending",
		} as Rent)
		jest.spyOn(rentRepositoryMock, "findByCarId").mockResolvedValue(null)
		try {
			await rentService.create(sampleRent)
		} catch (error) {
			expect(error).toBeDefined()
		}
		expect(rentRepositoryMock.findByCustomerId).toHaveBeenCalled();
		expect(rentRepositoryMock.findByCustomerId).toHaveBeenCalledWith(1);
	});

	it("Should set total price", () => {
		const totalPrice = rentService.setTotalPrice(
			new Date("2022-10-20 10:23:42"),
			new Date("2022-10-10 10:30:32"),
			90
		);
		expect(totalPrice).toBe(900);
	});

	it("Should call getAll once", async () => {
		await rentService.getAll();
		expect(rentRepositoryMock.getAll).toHaveBeenCalledTimes(1);
	})

	it("Should call getById once", async () => {
		await rentService.getById(1);
		expect(rentRepositoryMock.getById).toHaveBeenCalledTimes(1);
		expect(rentRepositoryMock.getById).toHaveBeenCalledWith(1);
	})

	it("Should call delete once", async () => {
		await rentService.delete(1);
		expect(rentRepositoryMock.delete).toHaveBeenCalledTimes(1);
		expect(rentRepositoryMock.delete).toHaveBeenCalledWith(1);
	})

	it("Should call update once", async () => {
		await rentService.update(sampleRent as UpdateRentDto, 1);
		expect(rentRepositoryMock.save).toHaveBeenCalledTimes(1);
	})
});
