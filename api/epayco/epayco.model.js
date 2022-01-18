const mongoose = require('mongoose');

const EpaycoSchema = new mongoose.Schema(
  {
    credit_info: {
      card_number: {
        type: String,
        unique: true,
        required: true,
      },
      card_exp_year: {
        type: String,
        unique: true,
        required: true,
      },
      card_exp_month: {
        type: String,
        unique: true,
        required: true,
      },
      card_cvc: {
        type: String,
        unique: true,
        required: true,
      }
    }
  },
  {
    timestamps: true,
  },
)
