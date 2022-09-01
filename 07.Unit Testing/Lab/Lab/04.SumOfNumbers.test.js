const sum = require('./04.SumOfNumbers');
const {expect, assert} = require('chai');

describe('Check if the sum is correct', () => {
    it('Should give 1 when we receive true as a parameter', () => {
        expect(sum([true])).to.equal(1);
    })
    it('The output should be NaN if non-array is given as an argument', () => {
        expect(sum(['string'])).to.be.NaN;
        expect(sum([{}])).to.be.NaN;
        expect(sum([undefined])).to.be.NaN;
    })
    it('Should give 0 when there are no parameters that are being added', () =>{
        let expectSum = 0;

        expect(sum([])).to.equal(expectSum);
        expect(sum([null])).to.equal(expectSum);
    } )
    it('The correct sum is given in the output', () => {
        let expectSum = 15;
        let param = [1, 2, 3, 4, 5];

        let actualSum = sum(param);

        expect(actualSum).to.equal(expectSum);
    })
})