import { DataTypes, Model, Sequelize } from "sequelize";

export class CarModel extends Model {
	static setup(sequelizeInstance: Sequelize) {
		CarModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
					unique: true,
				},
				brand: {
					type: DataTypes.STRING,
				},
				model: {
					type: DataTypes.STRING,
				},
				year: {
					type: DataTypes.NUMBER,
				},
				kms: {
					type: DataTypes.NUMBER,
				},
				color: {
					type: DataTypes.STRING,
				},
				AC: {
					type: DataTypes.BOOLEAN,
				},
				passengers: {
					type: DataTypes.NUMBER,
				},
				transmission: {
					type: DataTypes.STRING,
				},
				updateAt: {
					type: DataTypes.DATE,
				},
				createdAt: {
					type: DataTypes.DATE,
				},
			},
			{
				sequelize: sequelizeInstance,
				modelName: "Car",
				timestamps: true,
				updatedAt: true,
			}
		);
		return CarModel;
	}
}
