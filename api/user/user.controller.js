const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  getUserByEmail,
} = require('./user.service');

const { verifyAccountEmail } = require('../../utils/email.js');
const { verifyEmailToResetPassword } = require('../../utils/email.js');

const { signToken } = require('../../auth/auth.service');

const { log } = require('../../utils/logger');

async function getAllUsersHandler(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function getUserByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: `User not found with id: ${id}` });
    }
    return res.status(200).json(user);
  } catch (error) {
    log.error(error);
    return res.status(400).json({ error: error.message });
  }
}

async function getUserByEmailHandler(req, res) {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with email: ${email}` });
    }
    return res.status(200).json(user);
  } catch (error) {
    log.error(error);
    return res.status(400).json({ error: error.message });
  }
}

async function sendEmailToUserByEmailHandler(req, res) {
  const { email } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with email: ${email}` });
    }
    const token = signToken(user.profile)

    await verifyEmailToResetPassword(user, token);

    return res.status(200).json(user);
  } catch (error) {
    log.error(error);
    return res.status(400).json({ error: error.message });
  }
}

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);

    const token = signToken(user.profile)

    await verifyAccountEmail(user, token);

    return res.status(201).json(user.profile);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.keyValue });
  }
}

async function updateUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await updateUser(id, req.body);

    if (!user) {
      return res.status(404).json({ message: `User not found with id: ${id}` });
    }
    const token = signToken(user.profile);

    return res.status(200).json({ token });
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);

    if (!user) {
      return res.status(404).json({ message: `User not found with id: ${id}` });
    }

    return res.status(200).json(user);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  getUserByEmailHandler,
  sendEmailToUserByEmailHandler,
};
