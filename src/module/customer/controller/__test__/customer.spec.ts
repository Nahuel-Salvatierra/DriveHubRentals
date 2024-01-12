// import { CustomerService } from "../../customer.module";
// import { CustomerController } from "../customer.controller";

// class SoundPlayer {
// 	foo
//   constructor() {
//     this.foo = 'bar';
//   }
//   playSoundFile(fileName:string) {
//     console.log('Playing sound file ' + fileName);
//   }
// }
// class SoundPlayerConsumer {
// 	soundPlayer
//   constructor() {
//     this.soundPlayer = new SoundPlayer();
//   }
//   playSomethingCool() {
//     const coolSoundFileName = 'song.mp3';
//     this.soundPlayer.playSoundFile(coolSoundFileName);
//   }
// }


// jest.mock("../customer.controller")

// beforeEach(() => {
//   jest.mock("../customer.controller")

//   CustomerService.mockClear();
// });





// describe("/POST /customer/create", () => {

// 	const serviceMock:CustomerService = {
// 		create: jest.fn(),
// 		getCustomerById: jest.fn(() => Promise.resolve({})),
// 		getAllCustomers: jest.fn(() => Promise.resolve([])),
// 		updateCustomer: jest.fn(()=>Promise.resolve({}))
// 	};

// 	const controller = new CustomerController(serviceMock)

// 	it("Should create a customer", async () => {
// 		console.log("wol");
// 	});
// });
