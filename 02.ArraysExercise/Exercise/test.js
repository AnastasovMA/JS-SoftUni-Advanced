function solve(arr) {

    let result = arr.reduce((acc, el) => {
        let accL = acc.length;
        if (!accL) {
            acc.push(el);
        } else if (el >= acc[accL - 1]) {
            acc.push(el);
        }
        return acc;
    }, [])
    return result
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));