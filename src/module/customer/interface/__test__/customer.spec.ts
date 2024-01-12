import { Application } from "express";
import request from "supertest";
import AppBootstrap from "../../../../__test__/appBootstrap";

describe("/POST /customer/create", () => {
	let app: Application;

	const { testApp, container } = AppBootstrap();
	app = testApp;

	it("Should create a customer", async () => {
		const customer = {
			name: "somename",
			lastName: "SomeLastName",
			documentType: "dni",
			documentNumber: 36818118,
			birthrate: "2024-01-11T12:30:00Z",
			address: "Colonia 1845",
			phone: 1165776749,
			email: "salva@gmail.com",
		};
		const res = await request(app).post("/customer/create").send(customer);
		expect(res.statusCode).toEqual(200);
	});
});
