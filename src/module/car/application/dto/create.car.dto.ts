import { TransmissionEnum } from "../../domain/car.entity";

export class CreateCarDto {
	brand?: string;
	model: string;
	year: number;
	kms: number;
	color: string;
	AC: boolean;
	passengers: number;
	transmission: TransmissionEnum;

	constructor({
		brand,
		model,
		year,
		kms,
		color,
		AC,
		passengers,
		transmission,
	}: {
		brand: string;
		model: string;
		year: number;
		kms: number;
		color: string;
		AC: boolean;
		passengers: number;
		transmission: TransmissionEnum;
	}) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.kms = kms;
		this.color = color;
		this.AC = AC;
		this.passengers = passengers;
		this.transmission = transmission;
	}

  validate() {
    if (this.brand === undefined) {
      throw new Error("Validation error");
    }
    if (this.model === undefined) {
      throw new Error("Validation error");
    }
    if (this.year === undefined) {
      throw new Error("Validation error");
    }
    if (this.kms === undefined) {
      throw new Error("Validation error");
    }
    if (this.color === undefined) {
      throw new Error("Validation error");
    }
    if (this.AC === undefined) {
      throw new Error("Validation error");
    }
    if (this.passengers === undefined) {
      throw new Error("Validation error");
    }
    if (this.transmission === undefined) {
      throw new Error("Validation error");
    }
  }
}
