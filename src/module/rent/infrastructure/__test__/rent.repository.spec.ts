import {
	loadFixtureRents,
	rentModel,
	sequelizeInstance,
} from "../../../../__test__/config.jest";
import { sampleRent } from "../../../../__test__/rent.fixture";
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
		const newRent = await repository.save({
			...sampleRent,
		});
		expect(newRent.id).toEqual(1);
		expect(newRent.paymentMethod).toEqual(sampleRent.paymentMethod);
		expect(newRent.carId).toEqual(sampleRent.carId)
		expect(newRent.customerId).toEqual(sampleRent.customerId)
	});

});
