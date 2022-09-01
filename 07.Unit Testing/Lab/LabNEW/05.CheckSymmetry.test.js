const isSymmetric = require('./05.CheckSymmetry');
const {expect, assert} = require('chai');

describe('App', () => {
    it('Should return false if non-array is given', () => {
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('st')).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(1)).to.be.false;
    })
    it('Should return true if symmetric', () => {
        expect(isSymmetric([1,1])).to.be.true;
    })
    it('Should return false if asymmetric', () => {
        expect(isSymmetric([1,1,2])).to.be.false;
    })
    // it('Should return true if symmetric array is given', () => {
    //     expect(isSymmetric(['mocha','jolly','mocha'])).to.be.true;
    // })
    // it('Should return true false with asymmetric with mixed types', () => {
    //     expect(isSymmetric([1,'1'])).to.be.false;
    // })
    it('Should return true if mixed symmetric is given', () => {
        expect(isSymmetric(['1',2,'1'])).to.be.true;
        // expect(isSymmetric(['mocha','jolly','mocha'])).to.be.true;
    })
    it('Should return false if mixed asymmetric', () => {
        expect(isSymmetric(['1',1])).to.be.false;
    })
})