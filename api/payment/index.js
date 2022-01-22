const {
  createCardTokenHandlers,
  createCustomerHandlers,
  makePaymentHandlers
} = require('./payment.controller');
const { Router } = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

router.post('/card-token', isAuthenticated(), createCardTokenHandlers)
router.post('/customer', isAuthenticated(), createCustomerHandlers)
router.post('/make-payment', isAuthenticated(), makePaymentHandlers)
// router.get('/customer-list', getAllCustomers)

module.exports = router
