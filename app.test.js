const request = require('supertest');
const mongoose = require('mongoose');
const epayco = require('epayco-sdk-node')({
  apiKey: process.env.E_PublicKey,
  privateKey: process.env.E_PrivateKey,
  lang: 'ES',
  test: true
})
const app = require('./app');

test('testing home page', () => {
  const req = {};
  const res = { render: jest.fn() }
  handlers.home(req, res)
  expect(res.render.mock.calls[0][0]).toBe('home')
})
