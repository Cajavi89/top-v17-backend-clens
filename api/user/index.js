const { Router } = require('express');

const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  getUserByEmailHandler,
  sendEmailToUserByEmailHandler,
  getAllPersonalClensHandler,
} = require('./user.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllUsersHandler);
router.get('/personalclens', getAllPersonalClensHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);
router.get('/email/:email', isAuthenticated(), getUserByEmailHandler);
router.post('/email', sendEmailToUserByEmailHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
