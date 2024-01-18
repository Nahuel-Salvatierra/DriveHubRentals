import { CarService } from "../../../car/application/service/car.service";
import { CustomerService } from "../../../customer/customer.module";
import { RentRepository } from "../../infrastructure/rent.repository";

export class RentService {
	rentRepository: RentRepository;
	carService: CarService;
  customerService:CustomerService
	constructor(
    rentRepository: RentRepository,
    carService: CarService,
    customerSer: CustomerService
    ) {
		this.rentRepository = rentRepository;
    this.carService= carService
    this.customerService = customerSer
	}
}
