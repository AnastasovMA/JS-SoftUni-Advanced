function calculateMoney(fruit, weightInGrams, pricePerKg){
    let weightInKg = weightInGrams / 1000;
    let priceToPay = weightInKg * pricePerKg;
    console.log(`I need $${priceToPay.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}
calculateMoney('apple', 1563, 2.35);