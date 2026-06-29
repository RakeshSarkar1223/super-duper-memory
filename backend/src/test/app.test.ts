import supertest from "supertest";
import app from "../app.ts";

import User from "../models/user.model.ts";

jest.mock("../models/user.model.ts");

describe("Test the root path", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("testing does app running", async () => {
    const responce = await supertest(app).get("/");
    expect(responce.statusCode).toBe(200);
  });

  test("Testing addUser route", async () => {
    (User.create as jest.Mock).mockResolvedValue({
      _id: "123",
      name: "Rakesh",
      email: "rakesh@gmail.com",
      phone: "1234567890",
    });

    const response = await supertest(app).post("/addUser").send({
      name: "Rakesh",
      email: "rakesh@gmail.com",
      phone: "1234567890",
      password: "123456",
    });

    expect(response.statusCode).toBe(201);
  });
});
