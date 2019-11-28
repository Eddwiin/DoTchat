const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
})

module.exports = mongoose.model('User', UserSchema);