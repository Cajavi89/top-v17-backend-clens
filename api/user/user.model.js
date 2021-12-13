const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
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
      minlength: 5,
    },
    orderd: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ]
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', UserSchema);
