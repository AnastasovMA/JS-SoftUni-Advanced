function solve(info){
    let resultObj = {};

    for (const product of info) {
        let [name, price] = product.split(' : ');
        let firstLetter = name[0];

        if (resultObj[firstLetter] === undefined) {
            resultObj[firstLetter] = [];
        }
        resultObj[firstLetter].push({name, price});
    }
    
    let keys = Object.keys(resultObj);
    keys.sort((a, b) => a.localeCompare(b));

    for (const letter of keys) {
        console.log(letter);
        resultObj[letter].sort((a, b) => a.name.localeCompare(b.name));

        for (const kvp of resultObj[letter]) {
            console.log(`  ${kvp.name}: ${kvp.price}`)
        }
    }

}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])