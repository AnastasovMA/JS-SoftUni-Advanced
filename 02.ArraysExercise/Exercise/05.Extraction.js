function solve(arr){
    let result = [];
    let minValue = 0;

    for (let index = 0; index < arr.length; index++) {
        let currentElement = arr[index];
        if (currentElement >= minValue) {
            minValue = currentElement;
            result.push(currentElement);
        }

    }
    return result;
}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
));