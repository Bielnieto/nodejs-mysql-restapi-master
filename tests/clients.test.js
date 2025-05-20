import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

describe("Clients Routes", () => {
  it("should respond with a list of clients", async () => {
    const res = await request(app).get("/api/clients");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ID: expect.any(Number),
          Nom: expect.any(String),
          Cognoms: expect.any(String),
          Telefon: expect.any(String),
          Correu_electronic: expect.any(String),
          Desti_de_viatge: expect.any(String),
          Data_de_creacio: expect.any(String),
        }),
      ])
    );
  });

  it("should create a new client", async () => {
    const res = await request(app).post("/api/clients").send({
      nom: "Alex",
      cognoms: "Garcia",
      telefon: "123456789",
      correu_electronic: "alex@example.com",
      desti_de_viatge: "Paris",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        nom: "Alex",
        cognoms: "Garcia",
        telefon: "123456789",
        correu_electronic: "alex@example.com",
        desti_de_viatge: "Paris",
      })
    );
  });

  it("should get a client by id", async () => {
    const res = await request(app).get("/api/clients/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        ID: 1,
        Nom: expect.any(String),
        Cognoms: expect.any(String),
        Telefon: expect.any(String),
        Correu_electronic: expect.any(String),
        Desti_de_viatge: expect.any(String),
        Data_de_creacio: expect.any(String),
      })
    );
  });

  it("should update a client by id", async () => {
    const res = await request(app).patch("/api/clients/1").send({
      nom: "Alex Updated",
      desti_de_viatge: "London",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        ID: 1,
        Nom: "Alex Updated",
        Desti_de_viatge: "London",
      })
    );
  });

  it("should delete a client by id", async () => {
    const res = await request(app).delete("/api/clients/1");
    expect(res.statusCode).toEqual(204);
  });

  afterAll(async () => {
    await pool.end();
  });
});
