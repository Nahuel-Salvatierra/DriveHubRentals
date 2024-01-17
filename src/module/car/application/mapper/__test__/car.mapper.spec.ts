import { sampleCar } from "../../../../../__test__/car.fixture";
import Car from "../../../domain/car.entity";
import { fromCarDtoToEntity } from "../fromCarDtoToEntity";
import { fromCarModelToEntity } from "../fromCarModelToEntity";
describe("Mappers", () => {
	it("should convert car model to entity", () => {
		const carDto = fromCarModelToEntity({
			...sampleCar,
			id: 2,
			createAt: new Date(),
			updateAt: new Date(),
		});
		expect(carDto).toBeInstanceOf(Car);
    expect(carDto.brand).toBeDefined();
    expect(carDto.model).toBeDefined();
    expect(carDto.year).toBeDefined();
    expect(carDto.kms).toBeDefined();
    expect(carDto.color).toBeDefined();
    expect(carDto.AC).toBeDefined();
    expect(carDto.passengers).toBeDefined();
    expect(carDto.transmission).toBeDefined();

	});

	it("should convert a car dto to entity", () => {
		const carDto = fromCarDtoToEntity(sampleCar);
		expect(carDto).toBeInstanceOf(Car);
    expect(carDto.brand).toBeDefined();
    expect(carDto.model).toBeDefined();
    expect(carDto.year).toBeDefined();
    expect(carDto.kms).toBeDefined();
    expect(carDto.color).toBeDefined();
    expect(carDto.AC).toBeDefined();
    expect(carDto.passengers).toBeDefined();
    expect(carDto.transmission).toBeDefined();
	}); 
});
