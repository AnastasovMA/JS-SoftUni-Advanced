function solve(array){
    return array.filter((a, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(" ");
}
console.log(solve([3, 0, 10, 4, 7, 3]));