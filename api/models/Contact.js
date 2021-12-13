const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {type: String, required: true},
    desc: { type: String, required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
