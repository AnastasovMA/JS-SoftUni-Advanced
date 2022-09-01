const isOddOrEven = require('./02.EvenOrOdd');
const {expect, assert} = require('chai');

describe('App', () => {
    it('Should return undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    })
    it('Should return odd', () => {
        expect(isOddOrEven('1')).to.equal('odd');
    })
    it('Should return even', () => {
        expect(isOddOrEven('12')).to.equal('even');
    })
})