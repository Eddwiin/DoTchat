/**
 * source: https://gist.github.com/HarishChaudhari/0dd5514ce430991a1b1b8fa04e8b72a4
 *  Passwords must be 
 * - At least 8 characters long, max length anything
 * - Include at least 1 lowercase letter
 * - 1 capital letter
 * - 1 number
 * - 1 special character => !@#$%^&*
 */
const passwordReg = (password) => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(password);

export  { passwordReg };