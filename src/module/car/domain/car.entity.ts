export enum TransmissionEnum {
  manual = 'manual',
  automatic = 'automatic'
}

export default class Car {
  id?:number;
  brand?:string
  model?:string
  year?:number
  kms?:number
  color?:string
  AC?:boolean
  passengers?:number
  transmission?:TransmissionEnum
  createdAt?: Date;
	updatedAt?: Date;
}