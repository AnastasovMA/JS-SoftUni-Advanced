function solve(foodInfo){
    let foodStore = {}
    for (let index = 0; index < foodInfo.length; index += 2) {
        let currentFood = foodInfo[index];
        let currentFoodCalorie = Number(foodInfo[index+1]);

        foodStore[currentFood] = currentFoodCalorie;
    }
    console.log(foodStore);

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])