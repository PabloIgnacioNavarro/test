const request = require("supertest");
const server = require("./index.js");

describe("GET /books", () => {
  it("should return status code 200", async () => {
    const response = await request(server).get("/books");
    expect(response.status).toBe(200);
  });
});
describe("DELETE /books", () => {
  it("Borrando un libro inexistente", async () => {
    const response = await request(server).delete("/books/4");
    expect(response.status).toBe(404);
  });
});
it("Borrando un libro", async () => {
  const response = await request(server).delete("/books/3");
  expect(response.status).toBe(200);
});
