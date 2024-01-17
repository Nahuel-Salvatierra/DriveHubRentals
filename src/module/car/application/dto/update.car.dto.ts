import { TransmissionEnum } from "../../domain/car.entity";

export class UpdateCarDto {
	brand?: string;
	model?: string;
	year?: number;
	kms?: number;
	color?: string;
	AC?: boolean;
	passengers?: number;
	transmission?: TransmissionEnum;
}
