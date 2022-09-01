function townPopulation(townsArr){
    const towns = {};

    for (let townsAsString of townsArr) {
        let [name, population] = townsAsString.split(' <-> ');
        population = Number(population);

        if(towns[name] != undefined){
            population += towns[name];
        }
        towns[name] = population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}