const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    precio: Number,
    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
      }
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', OrderSchema);
