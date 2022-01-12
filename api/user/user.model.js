const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    firstName: {
      type: String,
      uppercase: true,
      required: true,
    },
    lastName: {
      type: String,
      uppercase: true,
      required: true,
    },
    direccion: {
      type: String,
      uppercase: true,
      required: true,
      trim: true,
    },
    identificacion: {
      type: Number,
      required: true,
      minlength: 8,
      trim: true,
    },
    telefono:  {
      type: Number,
      trim: true,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      default: 'usuario',
      enum: config.userRoles,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return await bcrypt.compare(candidatePassword, user.password);
};

// Virtuals
UserSchema.virtual('profile').get(function () {
  const { firstName, lastName, email, role, direccion, identificacion, telefono, id} = this;
  return { fullname: `${firstName} ${lastName}`, role, email, direccion, identificacion, telefono, id, userName: `${firstName.split(' ')[0]} ${firstName.split(' ')[0]}`};
});

module.exports = mongoose.model('User', UserSchema);
