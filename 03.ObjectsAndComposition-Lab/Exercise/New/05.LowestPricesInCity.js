function solve(productInfo) {
    let productsLowestPrices = [];
    for (const info of productInfo) {
        let [townName, productName, price] = info.split(' | ');
        let obj = {
            townName,
            product: productName,
            productPrice : Number(price)
        }
        if (productsLowestPrices.some(x => x.product === productName)) {
            let targetTown = productsLowestPrices.find(x => x.product === productName)
            if (targetTown.productPrice > price) {
                targetTown.townName = townName;
                targetTown.productPrice = price;
            }
        } else {
            productsLowestPrices.push(obj)
        }
    }
    productsLowestPrices.forEach((x) => console.log(`${x.product} -> ${x.productPrice} (${x.townName})`))
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])