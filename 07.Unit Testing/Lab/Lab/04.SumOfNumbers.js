function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
// sum(['ars'])
console.log(sum([true]));
module.exports = sum;