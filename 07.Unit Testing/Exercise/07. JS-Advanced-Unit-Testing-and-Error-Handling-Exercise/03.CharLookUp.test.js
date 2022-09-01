const lookupChar = require('./03.CharLookUp');
const {expect, assert} = require('chai');

describe('App', () => {
    it('Should return undefined if non-string is given', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar([], 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
    })
    it('Should return undefined if non-number is given', () => {
        expect(lookupChar('st', 'st')).to.be.undefined;
        expect(lookupChar('st', 1.5)).to.be.undefined;
        expect(lookupChar('st', [])).to.be.undefined;
        expect(lookupChar('st', {})).to.be.undefined;
    })
    it('Should return correct value', () => {
        expect(lookupChar('Mario', 2)).to.equal('r');
    })
    it('Should return "Incorrect Index" if index is outside of range', () => {
        expect(lookupChar('Mario', 20)).to.equal('Incorrect index');
        expect(lookupChar('Mario', -20)).to.equal('Incorrect index');
    })
})