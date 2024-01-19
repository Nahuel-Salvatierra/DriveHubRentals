import Car, { TransmissionEnum } from "../module/car/domain/car.entity"

export const sampleCar:Car = {
  brand: "brand",
  model: "model",
  year: 2022,
  kms: 10000,
  color: "color",
  AC: true,
  passengers: 5,
  transmission: TransmissionEnum.manual
}

export const sampleCar1 = new Car()
sampleCar1.AC = false
sampleCar1.brand = "sampleCar1brand"
sampleCar1.color = "sampleCar1color"
sampleCar1.kms = 10000
sampleCar1.model = "sampleCar1model"
sampleCar1.passengers = 4
sampleCar1.transmission = TransmissionEnum.automatic
sampleCar1.year = 2020

