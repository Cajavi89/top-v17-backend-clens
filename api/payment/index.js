const {
  createCardTokenHandlers,
} = require('./payment.controller');
const { Router } = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

const credit_info = {
  "card[number]": "4575623182290326",
  "card[exp_year]": "2025",
  "card[exp_month]": "12",
  "card[cvc]": "123"
}

const payment_info = {
  token_card: "1e5fa14ab47ff5c4c08c304",
  customer_id: "1e5fdff678e422d496f0e02",
  doc_type: "CC",
  doc_number: "10358519",
  name: "John",
  last_name: "Doe",
  email: "example@email.com",
  city: "Bogota",
  address: "Cr 4 # 55 36",
  phone: "3005234321",
  cell_phone: "3010000001",
  bill: "OR-1234",
  description: "Test Payment",
  value: "116000",
  tax: "16000",
  tax_base: "100000",
  currency: "COP",
  dues: "12",
  ip:"190.000.000.000", /*This is the client's IP, it is required */
  url_response: "https://ejemplo.com/respuesta.html",
  url_confirmation: "https://ejemplo.com/confirmacion",
  method_confirmation: "GET",

  //Los parámetros extras deben ser enviados tipo string, si se envía tipo array generara error.

  use_default_card_customer: true,/*if the user wants to be charged with the card that the customer currently has as default = true*/
}

var customer_info = {
  token_card: "1e5fa14ab47ff5c3c08c305",
  name: "Joe",
  last_name: "Doe",
  email: "joe@payco.co",
  default: true,
  //Optional parameters: These parameters are important when validating the credit card transaction
  city: "Bogota",
  address: "Cr 4 # 55 36",
  phone: "3005234321",
  cell_phone: "3010000001"
}

router.post('/card-token', isAuthenticated(), createCardTokenHandlers)
// router.post('/customer', createCustomerInfo)
// router.post('/payment', createPaymentInfo)
// router.get('/customer-list', getAllCustomers)


module.exports = router
