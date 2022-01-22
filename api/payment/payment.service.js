require('dotenv').config();
const get = require('lodash/get');

const epayco = require('epayco-sdk-node')({
  apiKey: process.env.E_PublicKey,
  privateKey: process.env.E_PrivateKey,
  lang: 'ES',
  test: true
})

async function createCardToken(data) {
  return await epayco.token.create(data)
}

async function createCustomer(user) {
  const customerInfo = {
    token_card: user?.billing?.creditCards?.[0]?.tokenId,
    name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    default: true,
  };

  return epayco.customers.create(customerInfo);
}

async function makePayment(user, payment) {
  const defaultTokenId = get(user, 'billing.creditCards[0].tokenId');
  const customerId = get(user, 'billing.customerId');

  const paymentInfo = {
    token_card: get(payment, 'tokenId', defaultTokenId),
    customer_id: get(payment, 'customerId', customerId),
    doc_type: get(payment, 'docType'),
    doc_number: get(payment, 'docNumber'),
    name: get(payment, 'firstName', user.firstName),
    last_name: get(payment, 'lastName', user.lastName),
    email: get(payment, 'email', user.email),
    city: get(payment, 'city'),
    address: get(payment, 'address'),
    phone: get(payment, 'phone'),
    cell_phone: get(payment, 'cellPhone'),
    bill: get(payment, 'bill'),
    description: get(payment, 'description'),
    value: get(payment, 'value'),
    tax: get(payment, 'tax'),
    tax_base: get(payment, 'taxBase'),
    currency: get(payment, 'currency'),
    dues: get(payment, 'dues'),
    ip: get(payment, 'ip'),
    use_default_card_customer: true,
  };

  return await epayco.charge.create(paymentInfo);
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
  createCardToken,
  createCustomer,
  makePayment,
  getAllCustomers,
};
