function objDemo(vehicle) {
    let engine = {
        power: 0,
        volume: 0
    }
    let wheels = [vehicle.wheelsize, vehicle.wheelsize, vehicle.wheelsize, vehicle.wheelsize];
    if (vehicle.power <= 90) {
        // small engine
        engine.power = 90;
        engine.volume = 1800;
    } else if (vehicle.power <= 120) {
        // normal engine
        engine.power = 120,
            engine.volume = 2400;
    } else {
        // monster engine
        engine.power = 200;
        engine.volume = 3500;
    }
    if (vehicle.wheelsize % 2 === 0) {
        wheels.fill(vehicle.wheelsize - 1);
    }
    const car = {
        model: vehicle.model,
        engine,
        carriage: {
            type: vehicle.carriage,
            color: vehicle.color
        },
        wheels
    }
    return car;
}
console.log(objDemo({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));