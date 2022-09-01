function getSum(input){
    return Number(input.pop()) + Number(input.shift());
}
console.log(getSum(['5', '10']));