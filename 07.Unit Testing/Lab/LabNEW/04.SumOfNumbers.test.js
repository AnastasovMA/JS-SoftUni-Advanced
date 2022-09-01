const sum = require('./04.SumOfNumbers');
const {expect, assert} = require('chai');

describe('Sub sum code', () => {
    it('Should return correct answer', () => {
        expect(sum([1,2])).to.equal(3);
    })
    it('Should return 0 if empty array', () => {
        expect(sum([])).to.equal(0);
        
    })
    it('Should return NaN if non-number is given', () => {
        expect(sum([{}])).to.be.NaN;
        expect(sum('string')).to.be.NaN;
        expect(sum([undefined])).to.be.NaN;
        // expect(sum([{undefined}])).to.be.NaN;
        expect(sum(['string', 1])).to.be.NaN;
    })
})