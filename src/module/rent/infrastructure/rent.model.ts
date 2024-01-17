import { DataTypes, Model, Sequelize } from "sequelize";

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
				customerId: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "Customer",
						key: "id",
					},
				},
				carId: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "Car",
						key: "id",
					},
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
