import {
	rentModel,
	sequelizeInstance,
} from "../../../../__test__/config.jest";
import { loadFixtureRents } from "../../../../__test__/rent.fixture";
import { RentRepository } from "../rent.repository";

describe("Rent repository", () => {
	let repository: RentRepository;

	beforeAll(() => {
		repository = new RentRepository(rentModel);
		loadFixtureRents();
	});

	beforeEach(async () => {
		await sequelizeInstance.sync({ force: true });
	});

	it("Should create a rent", async () => {
		// const newRent = await repository.save({
		// 	...sampleRent,
		// });
		// expect(newRent.id).toEqual(1);
		// console.log(newRent)
		// expect(newRent.paymentMethod).toEqual(sampleRent.paymentMethod);
	});
});
