import express from "express";
import { configureDI } from "./config/DI.config";
import { initCustomerModule } from "./module/customer/customer.module";
const app = express();
const port = process.env.PORT || 3000;
const container = configureDI();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initCustomerModule(app, container);

app.listen(port, () =>
	console.log(`Server listening at http://localhost:${port}`)
);
