const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require('./user.service');

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

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user.profile);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function updateUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await updateUser(id, req.body);

    if (!user) {
      return res.status(404).json({ message: `User not found with id: ${id}` });
    }

    return res.status(200).json(user);
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
};
