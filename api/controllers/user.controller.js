const mongoConnection = require('../core/mongo')

const UserController = {};

UserController.saveUser = (req, res, next) => {
    mongoConnection.then((dbo) => {
        const user = req.body.user;
        dbo.collection('User').findOne({ email: user.email}, (err, findUserRes) => {
            if (err) return res.status(500).json(err);
            else if (findUserRes) return res.status(200).json({ isUserExist: true });
            else {
                dbo.collection('User').insertOne(user, (err) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json(true);
                })
            }       
        });
     
    })
}

UserController.forgotPassword = (req, res, next) => {
    console.log(req.params.email);
    mongoConnection.then((dbo) => {
        const email = req.params.email;
        dbo.collection('User').findOne({ email: email }, (err, findUserRes) => {
            if (err) return res.status(500).json(err);
            else if (findUserRes) return res.status(200).json({ isUserNotExist: true })
            else {

            }
        })
    })
}

module.exports = UserController;