const { Router } = require('express');

const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
