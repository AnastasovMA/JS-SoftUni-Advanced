const flowerShop = require('./flowerShop');
const {expect} = require('chai');

describe('Check if app works correctly', () => {
    describe('Check if calculations works as intended', () => {
        it('The function should return correct result', () => {
            expect(flowerShop.calcPriceOfFlowers('minzuhar',5,10)).to.equal(`You need $50.00 to buy minzuhar!`)
        })
        it('Should throw error if correct input is given', () => {
            expect(() => flowerShop.calcPriceOfFlowers('s','s',5)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers('s','s','5')).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(55,'5',5)).to.throw('Invalid input!')
        })
        
    })
    
    describe('Check flowers availability ', () => {
        it('Check if the method returns a correct answer', () => {
            expect(flowerShop.checkFlowersAvailable('Roses', ['Roses'])).to.equal('The Roses are available!')
            expect(flowerShop.checkFlowersAvailable('Vodka', ['roses'])).to.equal('The Vodka are sold! You need to purchase more!')
        })
    })

    describe('Check if selling function works as intended', () => {
        it('Check if it works correctly', () => {
            expect(() => flowerShop.sellFlowers(['Rose','Lily','Orchid'],2).to.equal("Rose / Lily"));
            expect(() => flowerShop.sellFlowers(['1','2','3'],2).to.equal('1 / 2'));
        })
        it('Should return error if incorrect input is given', () => {
            expect(() => flowerShop.sellFlowers()).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['1'])).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw('Invalid input!');

            expect(() => flowerShop.sellFlowers([], 5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["rose"], 5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["rose"], -5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers("rose", -5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers("rose", "-5")).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["rose"], "-5")).to.throw("Invalid input!");
        })
    })
})