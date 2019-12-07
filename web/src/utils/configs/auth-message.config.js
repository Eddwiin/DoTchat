const errorMessage = err => ({
  message: "Something wrong ! Contact the team if the problem persists",
  err: err,
  type: "danger"
});

const resetEmailMessage = urlToReset => ({
  message: `Click here to reset your password : ${urlToReset}`,
  type: "info"
});

const emailExistMessage = () => ({
  message: "Email is already exists in database",
  type: "danger"
});

const rulePasswordMessage = () => ({
  message:
    "The password must contain : 8 characters, 1 number, 1 lowercase and 1 uppercase character.",
  type: "info"
});

const passwordChangedMessage = () => ({
  message: "Your password has been changed",
  type: "info"
});

const userHasRegistredMessage = () => ({
  message: "Your account has been saved",
  type: "info"
});

export default errorMessage;
export {
  resetEmailMessage,
  emailExistMessage,
  rulePasswordMessage,
  passwordChangedMessage,
  userHasRegistredMessage
};
