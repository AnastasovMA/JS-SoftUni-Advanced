function solve(numbers, start, end) {
    if (Array.isArray(numbers) === false) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);
    let sum = numbers.splice(startIndex, endIndex + 1);

    sum = sum.reduce((a, x) => {
        return a + Number(x);
    }, 0)
    return sum;

} 
solve([10, 20, 30, 40, 50, 60], 3, 300);
module.exports = solve;