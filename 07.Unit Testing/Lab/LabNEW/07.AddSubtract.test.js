const createCalculator = require('./07.AddSubtract');
const {expect, assert} = require('chai');

describe('Calculator functions', () => {
    it('Should return a correct answer for addition', () => {
        const calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    })
    it('Should return a correct answer for subtraction', () => {
        const calculator = createCalculator();
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-5)
    })
    it('Should return a correct answer', () => {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    })
    it('Should receive undefined if non-number is given', () => {
        const calculator = createCalculator();
        expect(calculator.add('5')).to.be.undefined;
        expect(calculator.subtract('5')).to.be.undefined;
    })
    it('Should return NaN if we try to get a non-number', () => {
        const calculator = createCalculator();
        calculator.add('str');
        expect(calculator.get()).to.be.NaN;
    })
})