const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = mongoose.Schema(
  {
    interest: {
      required: true,
      type: String,
      maxlength: 100,
    },
    country: {
      required: true,
      type: String,
      maxlength: 255,
    },
    specificTechnology: {
      required: false,
      type: String,
      maxlength: 255,
    },
    name: {
      required: true,
      type: String,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      //   unique: 1,
    },
    projectionDescription: {
      required: true,
      type: String,
      maxlength: 100000,
    },

    // images: {
    //   type: Array,
    //   default: [],
    // },
  },
  { timestamps: true }
);

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = { Quote };
