const flowerShop = require('./flowerShop');
const {expect} = require('chai');

describe("flowerShop tests", () => {
    describe("calcPriceOfFlowers tests", () => {
        it("Should return correct output", () => {
            expect(flowerShop.calcPriceOfFlowers("roza", 5, 10)).to.equal("You need $50.00 to buy roza!");
        });

        it("Should throw error when input is invalid", () => {
            expect(() => flowerShop.calcPriceOfFlowers("s", "5", "s")).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(69, "5", 6)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers("roza", "5", 6)).to.throw('Invalid input!');
        });
    });

    describe("checkFlowersAvailable tests", () => {
        it("Check if the method returns a correct answer", () => {
            expect(flowerShop.checkFlowersAvailable("roza", ["roza", "Lilly"])).to.equal("The roza are available!");
            expect(flowerShop.checkFlowersAvailable("Vodka", ["roza", "Lilly"])).to.equal("The Vodka are sold! You need to purchase more!");
        });
    });

    describe("sellFlowers tests", () => {
        it("Should throw err if invalid input", () => {
            expect(() => flowerShop.sellFlowers([], 5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["roza",], -1)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["roza"], "2")).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers("roza", -1)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["roza", "liliq", "orhideq"], 5)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers("roza", "s")).to.throw("Invalid input!");
        });

        it("Should return changed arr if valid input", () => {
            expect(flowerShop.sellFlowers(
                ["roza", "liliq", "orhideq"], 2
            )).to.equal("roza / liliq");
        })
    });
});