function solve(arr){
    let result = ['1'];
    for (let index = 1; index <= arr.length; index++) {
        let element = arr[index];
        if(element === 'add'){
            result[index] = index + 1;
        } else if (element === 'remove'){
            result.pop();
        }
    };

    if(result.length === 0){
        console.log("Empty");
    }

    for (const index of result) {
        if(index !== undefined){ 
            console.log(index);
        }
    }
}
solve(['remove', 
'remove', 
'remove']
);