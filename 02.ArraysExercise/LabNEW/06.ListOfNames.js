function solve(names){
    names.sort((a, b) => a.localeCompare(b));
    let count = 1;
    for (const name of names) {
        console.log(`${count}.${name}`);
        count++;
    }
}
solve(["John", "Bob", "Christina", "Ema"]);