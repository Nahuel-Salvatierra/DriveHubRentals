import express from 'express'
import cors from "cors";
import { configDIC } from './config/configDIC';
import { initCustomerModule } from './module/customer/customer.module';
import 'dotenv/config'
import { initCarModule } from './module/car/car.module';
import { initRenModule } from './module/rent/rent.module';
const port = process.env.PORT || 3000;

export const app = express()
const container = configDIC();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

initCustomerModule(app, container)
initCarModule(app, container)
initRenModule(app, container)
app.listen(port, () =>
	console.log(`Server listening at http://localhost:${port}`)
);
