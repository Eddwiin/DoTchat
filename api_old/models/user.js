const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: String,
    email: String,
    pseudo: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },
  {
    collection: "User"
  }
);

module.exports = mongoose.model("User", UserSchema);
