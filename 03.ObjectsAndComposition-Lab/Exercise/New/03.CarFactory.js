function assembleCar(car) {
    let engine = {
        power:0,
        volume:0
    }
    if (car.power <= 90) { 
        engine.power = 90;
        engine.volume = 1800;

    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;

    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    let carriage = {
        type: car.carriage,
        color: car.color
    }
    let tyre = Number(car.wheelsize);
    if(tyre % 2 === 0){
        tyre -= 1;
    }
    let wheels = [tyre, tyre, tyre, tyre];
    
    let newCar = {
        model: car.model,
        engine,
        carriage,
        wheels
    };
    return newCar

}
console.log(assembleCar({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))