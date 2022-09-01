function solve(array){
    let newArr = [];
    array.sort((a, b) => a- b);
    let newArrLength = Math.floor(array.length / 2);
    newArr = array.splice(newArrLength, array.length-1);
    return newArr;
}
solve([3, 19, 14, 7, 2, 19, 6]);