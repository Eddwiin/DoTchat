const INITIAL_APP_ROUTES = {
    AUTH: '/auth/:action',
    CHAT: '/home/chat'
}

const INITIAL_AUTH_ROUTES = {
    SIGNIN: '/auth/signIn',
    SIGNUP: '/auth/signUp',
    FORGOTPASSWORD: '/auth/forgot-password'
}

export default INITIAL_APP_ROUTES;
export { INITIAL_AUTH_ROUTES };