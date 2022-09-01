function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
const calculator = createCalculator();
console.log(isNaN((calculator.add('Add'))));
module.exports = createCalculator;