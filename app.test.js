const request = require('supertest');
const mongoose = require('mongoose');
const epayco = require('epayco-sdk-node')({
  apiKey: process.env.E_PublicKey,
  privateKey: process.env.E_PrivateKey,
  lang: 'ES',
  test: true
})
const app = require('./app');

describe('/api/clens', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/api/clens');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /privateRoute', () => {
  test('gives true if not authenticated/ authorized', async () => {
    const response = await request(app).get('/api/users/email/test@mail');
    expect(response.unauthorized).toBe(true);
  });
});
