const { expect } = require('chai');
const rgbToHexColor = require('./06.RGBToHex');

describe('App', () => {
    it('Should return undefined if first input is not an integer', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
    })
    it('Should receive undefined if any of the parameters is out of range', () => {
        expect(rgbToHexColor(1,2,-1)).to.be.undefined;
        expect(rgbToHexColor(1,2,266)).to.be.undefined;
        expect(rgbToHexColor(1,-2,1)).to.be.undefined;
        expect(rgbToHexColor(1,1000,1)).to.be.undefined;
        expect(rgbToHexColor(-1,2,1)).to.be.undefined;
        expect(rgbToHexColor(1000,2,1)).to.be.undefined;
    })
    it('Should return a correct answer', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    })
})