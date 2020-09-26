const request = require("supertest");
const app = require("../src/app");

describe("Service Routes", () => {
  describe("Insert data to DB", () => {
    it("insert json", async () => {
      const res = await request(app).post("/api/resource").send({
        something1: "blabla",
      });
      expect(res.statusCode).toEqual(200);
    });
    it("insert string", async () => {
      const res = await request(app).post("/api/resource").send("blabla");
      expect(res.statusCode).toEqual(200);
    });
  });
  describe("Get data from DB", () => {
    it("should get the last inserted data", async () => {
      await request(app).post("/api/resource").send({
        something2: "blabla",
      });
      const res = await request(app).get("/api/resource");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        something2: "blabla",
      });
    });
  });
});
