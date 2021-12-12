const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Review', ReviewSchema);
