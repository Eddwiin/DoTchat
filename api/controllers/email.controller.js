const async = require('async');
const crypto = require('crypto');
const nodemailer =  require('nodemailer');

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

            const smtpTransport = nodemailer.createTransport({
                service: 'smtp.mailtrap.io',
                port: 465,
                auth: {
                    user: "441e471307d6d3",
                    pass: "3e2ad7367dd716"
                },
                secure: true,
                debug: true,
                logger: true
            });
            
            const mailOptions = {
                to: user.email,
                from: '"Example Team" <from@example.com>',
                subject: 'Node.js Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };

            smtpTransport.sendMail(mailOptions, (err) => {
                mongoDB.dbConnection.close();

                if (err) 
                    done(err);
                else 
                    return res.status(200).json(true)
            });
        
        }
    ], (err) => {
        console.log(err);
        return res.status(500).json(err)
    })

}

module.exports = EmailController;