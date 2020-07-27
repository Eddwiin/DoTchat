export function configEmail() {
  return {
    module: {
      transport: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
        defaults: {
          from: process.env.MAIL_SENDER,
        },
      },
    },
  };
}
