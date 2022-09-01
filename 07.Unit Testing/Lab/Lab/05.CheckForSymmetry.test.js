const isSymmetric = require('./05.CheckForSymmetry');
const { expect, assert } = require('chai');

describe('Check symmetry', () => {
    it('Should return false if non-array is given', () => {
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric('Am')).to.be.false;  
        expect(isSymmetric(5)).to.be.false;
        expect(isSymmetric({name: 'Mario', age:0})).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(Symbol)).to.be.false;
        expect(isSymmetric(0)).to.be.false;
    })
    it('Should return true if symmetric array is given', () => {
        expect(isSymmetric([1,2,1])).to.be.true;
    })
    it('Should return false if asymmetric array is given', () => {
        expect(isSymmetric([1,2,1,1])).to.be.false;
    })
    it('Should return true if symmetric array is given', () => {
        expect(isSymmetric(['mocha','jolly','mocha'])).to.be.true;
    })
    it('Should return true false with asymmetric with mixed types', () => {
        expect(isSymmetric([1,'1'])).to.be.false;
    })
})