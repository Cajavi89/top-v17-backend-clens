const request = require('supertest');
const mongoose = require("mongoose");
const User = require("./api/user/user.model");
const app = require('./app');


describe('/api/clens', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/clens');
    expect(response.statusCode).toBe(200);
  });
});
describe('/api/users', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
  });
});
describe('/api/orders', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/orders');
    expect(response.statusCode).toBe(200);
  });
});
describe('/api/services', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/services');
    expect(response.statusCode).toBe(200);
  });
});
describe('/api/reviews', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/reviews');
    expect(response.statusCode).toBe(200);
  });
});
describe('/api/uploads', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/uploads');
    expect(response.statusCode).toBe(200);
  });
});


describe("GET /privateRoute", () => {
  test("gives true if not authenticated/ authorized", async () => {
    const response = await request(app).get('/api/users/email/test@mail');
    expect(response.unauthorized).toBe(true);
  });
});
