function checkSpeed(speed, area) {
    speed = Number(speed);
    let difference = 0;
    let speedLimit = 0;
    let status = ''
    let isSpeeding = false;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            }
            break; // 130
        case 'interstate':
            speedLimit = 90
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            } break; // 90
        case 'city':
            speedLimit = 50;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            } break; // 50
        case 'residential':
            speedLimit = 20;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            } break; //20
    }
    if (difference > 0) {
        isSpeeding = true;
        if (difference <= 20 && difference > 0) {
            status = 'speeding';
        } else if (difference <= 40 && difference > 20){
            status = 'excessive speeding';
        } else{
            status = 'reckless driving';
        }
    }

    if (isSpeeding) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }

}
checkSpeed(40, 'city');