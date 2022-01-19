const { findOneUser } = require('../../api/user/user.service');
const { updateUser } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');
const bcrypt = require('bcryptjs');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findOneUser({ email });

    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }

    const token = signToken(user.profile);

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function changePasswordHandler(req, res) {
  const { email, password, newPassword } = req.body;
  try {
    const user = await findOneUser({ email });

    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    const updatedUser = await updateUser(user.id, { password: hash });

    const token = signToken(updatedUser.profile);

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}


module.exports = {
  loginUserHandler,
  changePasswordHandler,
};
