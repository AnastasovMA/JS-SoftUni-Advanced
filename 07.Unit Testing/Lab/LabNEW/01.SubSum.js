function solve(arr, start, end){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end > arr.length){
        end = arr.length;
    }

    let sum = arr.slice(start, end + 1).reduce((acc, x) => acc + Number(x), 0);
    return sum;
}
console.log(solve('text', 0, 2))