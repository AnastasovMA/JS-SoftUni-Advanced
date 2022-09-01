function calculateTime(steps, footprint, speedInKmH){
    let distanceInMeters = steps * footprint;
    let speedInMS = (speedInKmH * 1000) / 3600;
    let restInSeconds = Math.floor(distanceInMeters / 500) * 60;
    let totalTimeInSeconds =  (distanceInMeters / speedInMS) + restInSeconds;

    let hours = Math.floor(totalTimeInSeconds / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTimeInSeconds / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTimeInSeconds % 60).toFixed(0).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}
calculateTime(4000, 0.60, 5);