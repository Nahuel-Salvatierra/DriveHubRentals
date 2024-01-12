import { DataTypes, Model, Sequelize } from "sequelize";

export class CustomerModel extends Model {
	static setup(sequelizeInstance: Sequelize) {
		CustomerModel.init(
			{
				id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
					unique: true,
				},
				name: {
					type: DataTypes.STRING,
				},
				lastName: {
					type: DataTypes.STRING,
				},
				documentType: {
					type: DataTypes.STRING,
				},
				documentNumber: {
					type: DataTypes.NUMBER,
				},
				address: {
					type: DataTypes.STRING,
				},
				birthrate: {
					type: DataTypes.DATE,
				},
				phone: {
					type: DataTypes.NUMBER,
				},
				email: {
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
				modelName: "Customer",
				timestamps: true,
				updatedAt: true,
			}
		);
		return CustomerModel;
	}
}
