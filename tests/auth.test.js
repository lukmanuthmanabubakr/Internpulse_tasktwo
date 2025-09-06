const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("../server");

let mongoServer;

jest.mock("../src/config/bitnob.js", () => ({
  post: jest.fn().mockResolvedValue({
    data: { data: { id: "mocked-bitnob-id" } }
  }),
}));

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Auth Routes", () => {
  it("should return pong on /ping", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("pong");
  });
});
