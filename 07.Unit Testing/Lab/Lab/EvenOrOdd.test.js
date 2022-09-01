const {expect} = require('chai');
const isOddOrEven = require('./EvenOrOdd');

describe('even or odd', () => {
    it('isString', () => {
        expect(isOddOrEven(3)).to.undefined;
    })
    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal('odd');
    })
    it('isEven', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    })
})
