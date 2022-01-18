const epayco = require('epayco-sdk-node')({
  apiKey: '89b5cf91ba82e6891f1c327153c41a88',
  privateKey: 'd11301174ccc50e6bb5885bba45ba760',
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
