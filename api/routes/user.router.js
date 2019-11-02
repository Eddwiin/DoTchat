const UserController = require('./../controllers/user.controller');

module.exports = (app) => {
    app.post('/auth/saveUser', UserController.saveUser);
}