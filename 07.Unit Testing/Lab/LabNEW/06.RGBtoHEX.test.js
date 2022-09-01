const rgbToHexColor = require('./06.RGBtoHEX');
const {expect, assert} = require('chai');

describe('App', () => {
    it('Should return correct value', () => {
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    })
    it('Should return undefined if non-number is given', () => {
        expect(rgbToHexColor('0',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,{},0)).to.be.undefined;
        expect(rgbToHexColor(0,0,[])).to.be.undefined;
    })
    it('Should return undefined if index is out of range', () => {
        expect(rgbToHexColor(-255,0,0)).to.be.undefined;
        // expect(rgbToHexColor(0,-255,0)).to.be.undefined;
        // expect(rgbToHexColor(0,0,-255)).to.be.undefined;

        expect(rgbToHexColor(555,0,0)).to.be.undefined;
        // expect(rgbToHexColor(0,555,0)).to.be.undefined;
        // expect(rgbToHexColor(0,0,555)).to.be.undefined;
    })

})