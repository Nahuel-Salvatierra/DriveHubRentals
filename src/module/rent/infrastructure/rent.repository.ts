import { fromCarModelToEntity } from "../../car/application/mapper/fromCarModelToEntity";
import { fromCustomerModelToEntity } from "../../customer/application/mapper/fromCustomerModelToEntity";
import { fromModelRentToEntity } from "../application/mapper/fromModelRentToEntity";
import { IRentRepository } from "../application/repository/rent.repository.interface";
import { Rent } from "../domain/rent.entity";
import { RentModel } from "./../rent.module";
export class RentRepository implements IRentRepository {
	rentModel: typeof RentModel;
	constructor(rentModel: typeof RentModel) {
		this.rentModel = rentModel;
	}
	async getAll(): Promise<Rent[]> {
		const rents = await this.rentModel.findAll({ include: { all: true } });
		return rents.map((rent) => fromModelRentToEntity(rent));
	}

	async getById(rentId: number): Promise<Rent> {
		const rent = await this.rentModel.findByPk(rentId, { include: { all: true } });
		return fromModelRentToEntity(rent);
	}

	async save(rent: Rent): Promise<Rent> {
		try {
			const savedRent = this.rentModel.build(
				{ ...rent },
				{ isNewRecord: !rent.id }
			);
			await savedRent.save();
			return fromModelRentToEntity(savedRent.dataValues);
		} catch (error) {
			throw error;
		}
	}

	async delete(rentId: number): Promise<boolean> {
		if (!rentId) throw new Error("Rent id not defined");
		const rentDeleted = await this.rentModel.destroy({
			where: { id: rentId },
		});
		return Boolean(rentDeleted);
	}

	async findByCarId(carId: number): Promise<Rent | null> {
		const rent = await this.rentModel.findOne({ where: { carId } });
		return rent? fromModelRentToEntity(rent): null
	}

	async findByCustomerId(customerId: number): Promise<Rent|null> {
		const rent = await this.rentModel.findOne({ where: { customerId } });
		return rent? fromModelRentToEntity(rent):null
	}
}
