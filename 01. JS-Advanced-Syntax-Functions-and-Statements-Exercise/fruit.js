function fruitCalculate(fruit, grams, pricePerKilo) {
    let fruitPrice = grams / 1000 * pricePerKilo;
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

fruitCalculate('orange', 2500, 1.80);