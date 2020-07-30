/**
 *  Passwords must be 
 * - At least 8 characters long, max length anything
 */
const passwordRegex = () => /^.{8,}$/;
const emailRegex = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export  { passwordRegex, emailRegex };