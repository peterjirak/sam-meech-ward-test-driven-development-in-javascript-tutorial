function validatePassword(password) {
    if (password === undefined || password === null) {
        return false;
    }
    password = `${password}`;
    if (password.length >= 8) {
        if (password.match(/[a-zA-Z]/)) {
            if (password.match(/[0-9]/)) {
                return true;
            }
        }
    }
    return false;
}

module.exports = validatePassword;
