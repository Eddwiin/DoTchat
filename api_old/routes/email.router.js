const EmailContoller = require('../controllers/email.controller');

module.exports = (app) => {
    app.get('/forgotPassword/:email', EmailContoller.forgotPassword)
    app.get('/isTokenResetPassValid/:token', EmailContoller.isTokenResetPassValid)

}