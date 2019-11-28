const async = require('async');
const crypto = require('crypto');
const nodemailer =  require('nodemailer');
const ObjectID = require('mongodb').ObjectID;
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

UserController.updateUserPassword = (req, res, next) => {

    mongoConnection.then((mongoDB) => {

        const _id = { _id: ObjectID(req.body._id)}
        const newValue = { $set: {
                                    password: req.body.password, 
                                    resetPasswordToken: undefined,
                                    resetPasswordExpires: undefined} }

        mongoDB.dbo.collection('User').updateOne(_id, newValue, (err, updateUserRes) => {
            mongoDB.dbConnection.close();
            if (err) return res.status(500).json(err);
            return res.status(200).json(true);
        });
    }).catch(res.status(500).json)
}

UserController.login = (req, res, next) => {
    mongoConnection.then((mongoDB, err) => {
        mongoDB.dbo.collection('User')
            .findOne({ email: req.body.email, password: req.body.password}, (err, user) => {
                mongoDB.dbConnection.close();
                if(err) return res.status(500).json(err);
                delete user.resetPasswordExpires;
                delete user.resetPasswordToken;
                return res.status(200).json(user);
            })
    }).catch(res.status(500).json)
}

module.exports = UserController;