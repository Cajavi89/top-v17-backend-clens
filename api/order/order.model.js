const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    important: Boolean,
    date: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', OrderSchema);
