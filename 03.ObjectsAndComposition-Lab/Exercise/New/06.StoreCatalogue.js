function sortAlphabeticaly(info) {
    let resultObj = {};
    for (const product of info) {
        let [name, price] = product.split(' : ');
        let firstLetter = name[0];

        if (!resultObj[firstLetter]) {
            resultObj[firstLetter] = [];
        }
        resultObj[firstLetter].push({ name, price });
    };

    let keys = Object.keys(resultObj);
    let sortKeys = keys.sort((x, y) => x.localeCompare(y))

    for (const letter of sortKeys) {
        console.log(letter);
        resultObj[letter].sort((a, b) => (a.name).localeCompare(b.name));

        for (const kvp of resultObj[letter]) {
            console.log(`  ${kvp.name}:${kvp.price}`);
        }
    }
}

sortAlphabeticaly(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])