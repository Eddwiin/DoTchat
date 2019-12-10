const INITIAL_APP_ROUTES = {
  AUTH: "/auth/:action",
  CHAT: "/home/chat",
  DEFAULT: "/auth/signIn"
};

const INITIAL_AUTH_ROUTES = {
  SIGNIN: "/auth/signIn",
  SIGNUP: "/auth/signUp",
  FORGOTPASSWORD: "/auth/forgot-password",
  RESETPASSWORD: "/auth/reset-password/:token"
};

export default INITIAL_APP_ROUTES;
export { INITIAL_AUTH_ROUTES };
