import { DataTypes, Model, Sequelize } from "sequelize";
import { StatusEnum } from "../domain/rent.entity";

export class RentModel extends Model {
	static setup(sequelizeInstance: Sequelize) {
		RentModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
					unique: true,
				},
				unitPrice: {
					type: DataTypes.NUMBER,
				},
				totalPrice: {
					type: DataTypes.NUMBER,
				},
				paymentMethod: {
					type: DataTypes.STRING,
				},
				isPaid: {
					type: DataTypes.BOOLEAN,
					defaultValue: false,
				},
				startDate: {
					type: DataTypes.DATE,
				},
				endDate: {
					type: DataTypes.DATE,
				},
				status: {
					type: DataTypes.STRING,
					defaultValue: StatusEnum.pending,
				}
			},
			{
				sequelize: sequelizeInstance,
				modelName: "Rent",
				timestamps: true,
				updatedAt: true,
			}
		);
		return RentModel;
	}
}
