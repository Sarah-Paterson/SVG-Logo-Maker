const SVG = require('./svg');

describe('SVG', () => {
    // A testing suite for SVG is created.
    describe('SVG', () => {
        // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
        // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
        describe('modulus', () => {
          it('should calculate 2 % 2 and return 0 as the remainder', () => {
            const total = 0;
            const SVG = new SVG();
            expect(SVG.modulus(2, 2)).toEqual(total);
          });
        });
      });


    // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  
    describe('Password Length', () => {
      it('should return false for password less than 8 characters long', () => {
        const SVG = new SVG();
        const result = SVG.isPassword('pass');
  
        expect(result).toEqual(false);
      });
    });
  
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  
    describe('Password Uppercase', () => {
      it('should return false if the password does not contain at least 1 uppercase letter', () => {
        const SVG = new SVG();
        const result = SVG.isPassword('password123');
  
        expect(result).toEqual(false);
      });
    });
  
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  
    describe('Password Lowercase', () => {
      it('should return false if the password does not contain at least 1 lowercase letter', () => {
        const SVG = new SVG();
        const result = SVG.isPassword('PASSWORD123');
  
        expect(result).toEqual(false);
      });
    });
  
    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  
    describe('Password Numbers', () => {
      it('should return false if the password does not contain at least 1 number', () => {
        const SVG = new SVG();
        const result = SVG.isPassword('password');
  
        expect(result).toEqual(false);
      });
    });
  
    // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  
    describe('Password Valid', () => {
      it('should return true if password is at least 8 characters long and contains at least 1 uppercase, lowercase, and number', () => {
        const SVG = new Validate();
        const result = validate.isPassword('password123');
  
        expect(result).toEqual(false);
      });
    });
  });