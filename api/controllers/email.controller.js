const async = require('async');
const crypto = require('crypto');
const nodemailer =  require('nodemailer');
const env = require('./../core/loader').getEnv();

const mongoConnection = require('../core/mongo')
const EmailController = {}

EmailController.forgotPassword = (req, res, next) => {

    async.waterfall([
        (done) => {
            crypto.randomBytes(20, (err, buf) => {
                const token = buf.toString('hex');
                done(err, token);
            });
      
        },

        (token, done) => {
            mongoConnection.then((mongoDB, err) => {
                done(err, token, mongoDB)
            })
        },

        (token, mongoDB, done) => {
            mongoDB.dbo.collection('User').findOne({ email: req.params.email}, (err, user) => {
                if (!user || err) {
                    mongoDB.dbConnection.close();
                    if (!user) 
                        return res.status(200).json({ isUserFound: false})
                }
                done(err, token, mongoDB, user);
            })
        },

        (token, mongoDB, user, done) => {
            const id = { _id: user._id };
            const newValues = { $set: { resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000 } }
            mongoDB.dbo.collection('User').updateOne(id, newValues, (err,res) => {
                if(err) mongoDB.dbConnection.close();
                done(err, token, mongoDB, user)
            })
        },

        (token, mongoDB, user, done) => {

            nodemailer.createTestAccount().then((account) => {

                const transport = nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user,
                        pass: account.pass
                    }
                });

                const message = {
                    to: user.email,
                    from: account.user,
                    subject: 'Node.js Password Reset',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        env.web.url + 'auth/reset-password/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n',
                };

                transport.sendMail(message, (err, info) => {
                    mongoDB.dbConnection.close();
                    if (err) done(err);
                    else {
                        return res.status(200).json({ urlToReset: nodemailer.getTestMessageUrl(info)});
                    }
                })
            })
        }

    ], (err) => {
        console.log(err);
        return res.status(500).json(err)
    })

}

EmailController.isTokenResetPassValid = (req, res, body) => {
    mongoConnection.then((mongoDB, err) => {

        mongoDB.dbo.collection('User').findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: {
                $gt: Date.now()
            }
        }, (err, user) => {
            mongoDB.dbConnection.close();
            if (err) return res.status(500).json(err)
            else if (!user) return res.status(200).json(false);
            else return res.status(200).json(user._id)
        })
    })
}
module.exports = EmailController;
