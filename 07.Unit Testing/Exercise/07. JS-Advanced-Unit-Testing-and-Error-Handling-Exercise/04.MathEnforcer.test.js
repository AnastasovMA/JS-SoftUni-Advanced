const mathEnforcer = require('./04.MathEnforcer');
const {expect, assert} = require('chai');

describe('Math enforcer', () => {
    it('Should be an object', () => {
        expect(typeof mathEnforcer).to.equal('object');
    })
    describe('Addfive', () => {
        it('Should return correct value', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        })
        it('Should return undefined if non-number parameter is given', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive('2')).to.be.undefined;
        })
    })
    describe('SubtractTen', () => {
        it('Should return correct value', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
        })
        it('Should return undefined if non-number parameter is given', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
            expect(mathEnforcer.subtractTen('2')).to.be.undefined;
        })
    })
    describe('sum', () => {
        it('Should return correct value', () => {
            expect(mathEnforcer.sum(5,5)).to.equal(10);
            expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
            expect(mathEnforcer.sum(-5.5, -5.5)).to.equal(-11);
        })
        it('Should return undefined if non-number parameter is given', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum('2')).to.be.undefined;
            expect(mathEnforcer.sum('2', 2)).to.be.undefined;
            expect(mathEnforcer.sum(2, '2')).to.be.undefined;
        })
    })
})
