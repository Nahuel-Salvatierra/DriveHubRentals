import { sampleCar } from "../../../../../__test__/car.fixture";
import { sampleCustomer } from "../../../../../__test__/customer.fixture";
import { sampleRent } from "../../../../../__test__/rent.fixture";
import Car from "../../../../car/domain/car.entity";
import Customer from "../../../../customer/domain/customer.entity";
import { Rent } from "../../../domain/rent.entity";
import { CreateRentDto } from "../../dto/create.rent.dto";
import { fromRentDtoToEntity } from "../fromDtoRentToEntity";
import { fromModelRentToEntity } from "../fromModelRentToEntity";

describe("Rent Mapper", () => {
	it("Should convert a model rent to entity", () => {

		const newRent = fromModelRentToEntity({ ...sampleRent, id: 1 , Car:sampleCar, Customer:sampleCustomer });
    expect(newRent.customer).toBeInstanceOf(Customer);
    expect(newRent.car).toBeInstanceOf(Car);
    expect(newRent.id).toBe(1);
    expect(newRent.car?.id).toBe(sampleCar.id)
    expect(newRent.customer?.id).toBe(sampleCustomer.id)
	});

  it("Should convert a dto rent to entity", () => {
    const newRentDto = new CreateRentDto({...sampleRent, id : 1});
    const newRent = fromRentDtoToEntity(newRentDto);
    expect(newRent).toBeInstanceOf(Rent);
    expect(newRent.id).toBe(1)
  })
});
