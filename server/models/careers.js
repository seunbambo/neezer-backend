const mongoose = require('mongoose');

const careersSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  fileUrl: { type: String, required: true },
  whyJoin: { type: String, required: true },
});

module.exports = mongoose.model('Careers', careersSchema);
