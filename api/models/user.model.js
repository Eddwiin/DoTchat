const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    lastName: String,
    firstName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema);