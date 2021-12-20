const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    precio: {
      type: Number,
      required: true
    },
    service: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        precio: Number,
        name: String,
        cantidad: {
          type: Number,
          required: true
        }
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
