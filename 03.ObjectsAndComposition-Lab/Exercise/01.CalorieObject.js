function solve(arr){
    let productInputs = {};
    for (let index = 0; index < arr.length; index += 2) {
        let currentObject = arr[index];
        let currentObjectCal = Number(arr[index + 1]);
        productInputs[currentObject] = currentObjectCal;
    }
    console.log(productInputs);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);