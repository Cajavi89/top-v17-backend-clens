require('dotenv').config();
const epayco = require('epayco-sdk-node')({
  apiKey:  process.env.E_PublicKey,
  privateKey: process.env.E_PrivateKey,
  lang: 'ES',
  test: true
})

async function createToken(req, res) {
  try {
    const data = await epayco.token.create(req.body)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createCustomerInfo(req, res) {
  try {
    const data = await epayco.customers.create(req.body)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createPaymentInfo(req, res) {
  try {
    const data = await epayco.charge.create(req.body)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getAllCustomers(req, res) {
  try {
    const data = await epayco.customers.list()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createToken,
  createCustomerInfo,
  createPaymentInfo,
  getAllCustomers,
};
