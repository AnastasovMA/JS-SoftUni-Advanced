const { expect, assert } = require('chai');
const createCalculator = require('./07.AddSubrtract');

describe('App', () => {
    it('Should return an object', () => {
        expect(typeof createCalculator()).to.equal('object');
    })
    it('Should return NaN if other than number is given', () =>{
        const calculator = createCalculator();
        calculator.add('A');
        expect(calculator.get()).to.be.NaN;
    })
    it('Should return NaN if non-number is passed', () =>{
        const calculator = createCalculator();
        calculator.subtract('B');
        expect(calculator.get()).to.be.NaN;
    })
    it('Should get 0 when no parameters', () => {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    })
    it('Should give correct add answer', () => {
        const calculator = createCalculator();
        let expectedAnswer = 5;
        calculator.add(5);
        expect(calculator.get()).to.equal(expectedAnswer);
    })
    it('Should give correct subtract answer', () => {
        const calculator = createCalculator();
        let expectedAnswer = 2;
        calculator.add(5);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(expectedAnswer);
    })
})