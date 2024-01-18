import { fromModelRentToEntity } from "../application/mapper/fromModelRentToEntity";
import { Rent } from "../domain/rent.entity";
import { RentModel } from "./../rent.module";
export class RentRepository {
	rentModel: typeof RentModel;
	constructor(rentModel: typeof RentModel) {
		this.rentModel = rentModel;
	}
	async getAll(): Promise<Rent[]> {
		const rents = await this.rentModel.findAll();
		return rents.map((rent) => fromModelRentToEntity(rent));
	}

	async getById(rentId: number) {
		const rent = await this.rentModel.findByPk(rentId);
		return fromModelRentToEntity(rent);
	}

	async save(rent: Rent): Promise<Rent> {
		const savedRent = this.rentModel.build(
			{ ...rent },
			{ isNewRecord: !rent.id }
		);
		await savedRent.save();
		return fromModelRentToEntity(savedRent);
	}

  async delete(rentId: number): Promise<boolean> {
    if (!rentId) throw new Error("Rent id not defined");
    const rentDeleted = await this.rentModel.destroy({
      where: { id: rentId },
    });
    return Boolean(rentDeleted);
  }
}
