const UserController = require('./../controllers/user.controller');

module.exports = (app) => {
    app.get('/', UserController.getUsers);
}