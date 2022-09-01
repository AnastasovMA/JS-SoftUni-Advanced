// const assert = require('assert').strict;
// const {aseert} = require('chai');
const expect = require('chai').expect;
const solve = require('./01.Sub-sum');

describe('Sub sum calculator', () => {
    it('Should calculate sub sum when end index is larger than length', () => {
        // Arrange 
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);
        // Assert
        
        expect(actualSum).to.equal(expectedSum)
        // assert.equal(actualSum, expectedSum);
    })
    it('Should calculate sub sum when start index is smaller than 0', () => {
        // Arrange 
        let expectedSum = 10;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -1;
        let endIndex = 0;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert

        // assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    })
    it('Should return NaN when non-array is provided in the first argument', () => {
        expect(solve(10, 0, 1)).to.be.NaN;
        expect(solve(true, 0, 1)).to.be.NaN;
        expect(solve({}, 0, 1)).to.be.NaN;
        expect(solve('10', 0, 1)).to.be.NaN;
        expect(solve(null, 0, 1)).to.be.NaN;
        expect(solve(undefined, 0, 1)).to.be.NaN;
        // assert.notStrictEqual(solve(10, 0, 1), NaN);
        // assert.notStrictEqual(solve(true, 0, 1), NaN);
        // assert.notStrictEqual(solve({}, 0, 1), NaN);
        // assert.notStrictEqual(solve('10', 0, 1), NaN);
        // assert.notStrictEqual(solve(null, 0, 1), NaN);
        // assert.notStrictEqual(solve(undefined, 0, 1), NaN);
    })
})

