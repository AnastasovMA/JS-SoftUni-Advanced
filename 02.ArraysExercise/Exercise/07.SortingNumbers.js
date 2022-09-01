function solve(arr) {
    arr.sort((a, b) => a - b);

    for (let index = 1; index < arr.length; index += 2) {
        let lastElement = arr.pop();
        arr.splice(index, 0, lastElement);
    }
    return arr;

}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));