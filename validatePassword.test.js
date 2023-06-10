const validatePassword = require('./validatePassword');

test("return false given an empty string",
     () => {
        expect(validatePassword("")).toBe(false);
     }
);
