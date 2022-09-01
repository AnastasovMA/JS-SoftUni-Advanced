function solve(arr){
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element < 0){
            // to the front
            result.unshift(element);
        } else if (element >= 0){
            // to the back
            result.push(element);
        }
    }
    for (let element of result) {
        console.log(element);
    }
}
solve([3, -2, 0, -1]);