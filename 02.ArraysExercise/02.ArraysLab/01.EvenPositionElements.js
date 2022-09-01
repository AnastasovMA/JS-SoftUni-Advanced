function getEvenElements(input){
    let result = '';
    for (let index = 0; index < input.length; index+=2) {
        let currentElement = input[index];
        result += currentElement + ' ';
    }
    console.log(result);
}
getEvenElements(['20', '30', '40', '50', '60']);