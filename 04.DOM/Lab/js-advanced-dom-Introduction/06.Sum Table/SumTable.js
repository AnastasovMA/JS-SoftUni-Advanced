function sumTable() {
    let priceElements = document.querySelectorAll('td:nth-of-type(2n)');
    let result = document.getElementById('sum');

    let sum = Array.from(priceElements).reduce((acc, x) => {
        let currentNum = Number(x.textContent);
        return acc + currentNum;
    }, 0)

    // for (let index = 0; index < priceElementsArr.length - 1; index++) {
    //     let productPrice = Number(priceElementsArr[index].textContent);
    //     sum += productPrice;
    // }
    result.textContent = sum;
}