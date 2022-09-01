function solve(townsInfo) {
    let towns = {};
    for (let index = 0; index < townsInfo.length; index++) {
        let [name, population] = townsInfo[index].split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])