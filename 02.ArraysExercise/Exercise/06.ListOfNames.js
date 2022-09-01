function solve(arr){
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach(element => {
        let index = arr.indexOf(element) + 1;
        console.log(`${index}.${element}`);
    });
}
solve(["John", "Bob", "Christina", "Ema"]);