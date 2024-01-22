import {
	loadFixtureRents,
	rentModel,
	sequelizeInstance,
} from "../../../../__test__/config.jest";
import { sampleRent, savedRent } from "../../../../__test__/rent.fixture";
import { RentRepository } from "../rent.repository";

describe("Rent repository", () => {
	let repository: RentRepository;

	beforeAll(() => {
		repository = new RentRepository(rentModel);
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a rent", async () => {
		await loadFixtureRents();
		const newRent = await repository.save(sampleRent);
		expect(newRent.id).toEqual(1);
		expect(newRent.paymentMethod).toEqual(sampleRent.paymentMethod);
		expect(newRent.carId).toEqual(sampleRent.carId);
		expect(newRent.customerId).toEqual(sampleRent.customerId);
	});

	it("Should get rent by ID", async () => {
		await loadFixtureRents(true);
		const rent = await repository.getById(savedRent.id);
		expect(rent.carId).toEqual(savedRent.carId);
		expect(rent.customerId).toEqual(savedRent.customerId);
		expect(rent.id).toEqual(savedRent.id);
	});

	it("Should delete a rent", async () => {
		await loadFixtureRents(true);
		const deleted = await repository.delete(savedRent.id);
		expect(deleted).toBeTruthy();
	});

	it("Should get all rents", async () => {
		await loadFixtureRents(true);
		const rents = await repository.getAll();
		expect(rents.length).toEqual(1);
		expect(rents[0].id).toEqual(1);
		expect(rents[0].carId).toEqual(1);
		expect(rents[0].customerId).toEqual(1);
	});

	it("Should update a rent with ID", async () => {
		await loadFixtureRents(true);
		sampleRent.id = 1;
		const updatedRent = await repository.save(sampleRent);
		expect(updatedRent.totalPrice).toEqual(sampleRent.totalPrice);
		expect(updatedRent.unitPrice).toEqual(sampleRent.unitPrice);
	});

	it("Should find rent by customer ID", async () => {
		await loadFixtureRents(true);
		const rent = await repository.findByCustomerId(1);
		expect(rent!.id).toEqual(1);
		expect(rent!.customerId).toEqual(1);
	})

	it("Should find rent by car ID", async () => {
		await loadFixtureRents(true);
		const rent = await repository.findByCarId(1);
		expect(rent!.id).toEqual(1);
		expect(rent!.carId).toEqual(1);
	})
});
