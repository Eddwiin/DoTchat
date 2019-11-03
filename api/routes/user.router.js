const UserController = require('./../controllers/user.controller');

module.exports = (app) => {
    app.post('/saveUser', UserController.saveUser);
    app.put('/updateUserPassword', UserController.updateUserPassword)
}