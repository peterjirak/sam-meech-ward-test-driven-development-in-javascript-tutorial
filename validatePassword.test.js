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

test("return false given a password that is 8 characters or longer, but contains no letters",
    () => {
        expect(validatePassword('12345678')).toBe(false);
    }
);

test("return false given a password that is 8 characters or longer, but contains no numbers",
    () => {
        expect(validatePassword('abcdefgh')).toBe(false);
    }
);

test("return false given a password that contains numbers and letters but is fewer than 8 characters",
    () => {
        expect(validatePassword('1b3d5e7')).toBe(false);
    }
);
