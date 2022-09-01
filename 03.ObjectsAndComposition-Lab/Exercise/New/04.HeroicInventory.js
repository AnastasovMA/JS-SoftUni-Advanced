function solve(heroesInfo){
    let result = [];

    for (const hero of heroesInfo) {
        let [heroName, heroLevel, items] = hero.split(' / ');
        let currentHero = {
            name: heroName,
            level: Number(heroLevel),
            items: items ? items.split(', ') : []
        }
        result.push(currentHero);
    }
    let newResult = JSON.stringify(result)
    console.log(newResult);
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
