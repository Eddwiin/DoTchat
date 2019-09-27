export const nameValidator = (name) => {
    const regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    return regex.test(name)
};

export const emailValidator = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

/*
Contain at least 8 characters
Contain at least 1 number
Contain at least 1 lowercase character (a-z)
Contain at least 1 uppercase character (A-Z)
Contains only 0-9a-zA-Z
*/
export const passwordValidator = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password);
}

export const passwordsHasSame = (password, rPassword) => {
    return password === rPassword;
}