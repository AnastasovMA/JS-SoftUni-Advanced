function solve(arr, rotations){
    for (let index = 0; index < rotations; index++) {
        let element = arr[index];
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

);