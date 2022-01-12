const { Router } = require('express');

const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  getUserByEmailHandler,
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);
router.get('/email/:email', getUserByEmailHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
