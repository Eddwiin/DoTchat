const async = require('async');
const crypto = require('crypto');
const nodemailer =  require('nodemailer');

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

    mongoConnection.then((dbo) => {
        async.waterfall([
            (done) => {
                crypto.randomBytes(20, (err, buf) => {
                    const token = buf.toString('hex');
                    done(err, token);
                });
            },
            (token, done) => {
                dbo.collection('User').findOne({ email: req.params.email }, (err, user) => {
                    if(!user) {
                        req.flash('error', 'No account with that email address exists.')
                        return res.status(200).json({ isUserFound: false})
                    }

                    const id = { _id: user._id }
                    const newValues = { $set: { resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000 } }
                    dbo.collection('User').updateOne(id, newValues, (err,res) => {
                        if(err) throw err;
                        done(err, token, user)
                    })
                })
            },
            (token, user, done) => {
                const smtpTransport = nodemailer.createTransport({
                    service: 'smtp.mailtrap.io',
                    port: 2525,
                    ssl: false,
                    tls: false,
                    auth: {
                        user: "441e471307d6d3",
                        pass: "3e2ad7367dd716"
                    },
                })

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
                    req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                    done(err, 'done');
                  });
            }
        ], (err) => {
            if (err) return next(err);
            return res.status(200).json({ isUserFound: true})
        })
    }).catch(res.status(500).json)

  }

module.exports = UserController;