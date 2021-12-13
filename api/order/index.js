const { Router } = require('express');

const {
  createOrderHandler,
  deleteOrderHandler,
  getAllOrdersHandler,
  getOrderByIdHandler,
  updateOrderHandler,
} = require('./order.controller');

const router = Router();

router.get('/', getAllOrdersHandler);
router.post('/', createOrderHandler);
router.get('/:id', getOrderByIdHandler);
router.delete('/:id', updateOrderHandler);
router.patch('/:id', deleteOrderHandler);

module.exports = router;
