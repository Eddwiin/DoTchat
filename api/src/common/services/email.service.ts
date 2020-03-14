import { Injectable } from '@nestjs/common';
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { UserModel } from 'src/user/interfaces/user.interface';

@Injectable()
export class EmailService {

    async sendEmail(user: UserModel, token: string, callback: Function) {

        return await createTestAccount().then( async account => {
            const transport = createTransport({
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
                subject: "Node.js Password Reset",
                text:
                  "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                  "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
                  (process.env.WEB_URL || "http://localhost:3000") +
                  "auth/reset-password/" + user._id + "/" + token + "\n\n" +
                  "If you did not request this, please ignore this email and your password will remain unchanged.\n"
              };

              return await transport.sendMail(message, (err, info) => {
                  if (err) callback(err);
                  else callback(null, getTestMessageUrl(info))
              });
        })
    }
}
