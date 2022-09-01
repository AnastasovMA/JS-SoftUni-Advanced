function aggreagateElements(elements){
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1/b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(array, initialVal, func){
        let val = initialVal;
        for (let index = 0; index < array.length; index++) {
            val = func(val, array[index]);
        }
        console.log(val);

    }
}
aggreagateElements([1, 2, 3]);