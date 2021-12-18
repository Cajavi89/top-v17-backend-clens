const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userName: {
      type: String,
      ref: 'User',
      required: true
    },
    userPhoto: {
      type: String,
      ref: 'User',
      required: true
    },
    comentario: {
      type: String,
      required: true,
      minLength: 10,
      trim: true,
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Review', ReviewSchema);
