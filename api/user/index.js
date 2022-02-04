const { Router } = require('express');
const multer = require('multer');

const {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  getUserByEmailHandler,
  sendEmailToUserByEmailHandler,
  getAllPersonalClensHandler,
  sendPostulaEmailHandler
} = require('./user.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();
const upload = multer({ dest: './temp' });

router.get('/', getAllUsersHandler);
router.get('/personalclens', getAllPersonalClensHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);
router.get('/email/:email', isAuthenticated(), getUserByEmailHandler);
router.post('/email', sendEmailToUserByEmailHandler);
router.post('/postula', upload.array('file'), sendPostulaEmailHandler)
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
