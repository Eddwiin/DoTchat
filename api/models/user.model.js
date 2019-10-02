const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    lastName: String,
    firstName: String,
    pseudo: String,
    password: String
})

const User = mongoose.model('User', UserSchema);

module.exports = User;