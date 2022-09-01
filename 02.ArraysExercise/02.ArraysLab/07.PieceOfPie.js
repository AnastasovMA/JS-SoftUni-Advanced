function solve(array, start, end){
    let result = [];
    indexOfStart = array.indexOf(start);
    indexOfEnd = array.indexOf(end) + 1; // to get the element at the index too
    result = array.slice(indexOfStart, indexOfEnd);
    return result;
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));