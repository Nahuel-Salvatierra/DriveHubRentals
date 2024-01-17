import { TransmissionEnum } from "../module/car/domain/car.entity"

export const sampleCar = {
  brand: "brand",
  model: "model",
  year: 2022,
  kms: 10000,
  color: "color",
  AC: true,
  passengers: 5,
  transmission: TransmissionEnum.manual
}
