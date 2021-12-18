const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    precio: {
      type: Number,
      required: true
    },
    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
      }
    ],
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
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', OrderSchema);
