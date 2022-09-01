function createCity(name, population, treasury){
    let city = {
        name,
        population,
        treasury
    }
    return city;
}
let myCity = createCity('Stara Zagora', 130000, 10);
console.log(myCity);