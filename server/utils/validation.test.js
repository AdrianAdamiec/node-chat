const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {

        expect(isRealString(23)).toBe(false);
        expect(isRealString('   ')).toBe(false);
        expect(isRealString('test')).toBe(true);
    });
});
