const validatePassword = require('./validatePassword');

test("return false given an empty string",
     () => {
        expect(validatePassword("")).toBe(false);
     }
);

test("return true given a password of 8 characters or longer, a letter, and a number",
     () => {
        expect(validatePassword('1234567a')).toBe(true);
     }
);
