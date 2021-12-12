const { Router } = require('express');

const {
  createServiceHandler,
  deleteServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  updateServiceHandler,
} = require('./service.controller');

const router = Router();

router.get('/', getAllServicesHandler);
router.post('/', createServiceHandler);
router.get('/:id', getServiceByIdHandler);
router.delete('/:id', updateServiceHandler);
router.patch('/:id', deleteServiceHandler);

module.exports = router;
