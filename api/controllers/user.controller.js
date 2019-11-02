const async = require('async');
const crypto = require('crypto');
const nodemailer =  require('nodemailer');

const mongoConnection = require('../core/mongo')

const UserController = {};

UserController.saveUser = (req, res, next) => {
    const userToAdd = req.body.user;

    async.waterfall([
        (done) => {
            mongoConnection.then((mongoDB, err) => {
                done(err, mongoDB);
            })
        },

        (mongoDB, done) => {
            mongoDB.dbo.collection('User').findOne({ email: userToAdd.email}, (err, user) => {
                
                if (err || user) {
                    mongoDB.dbConnection.close();
                    if (user)
                        return res.status(200).json({ isUserExist: true })                        
                }
                done(err,mongoDB, user);
            })
        },

        (mongoDB, user, done) => {
            mongoDB.dbo.collection('User').insertOne(userToAdd, (err, userAdded) => {
                mongoDB.dbConnection.close();
                if (err) done(err);
                return res.status(200).json(true);
            })
        }
    ], (err) => res.status(500).json(err))
}

module.exports = UserController;