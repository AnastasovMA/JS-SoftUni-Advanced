function createAssemblyLine() {
    let assemblyLibrary = {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                this.temp < this.tempSettings ? (this.temp += 1) : (this.temp -= 1);
            }
        },
        hasAudio: obj => Object.assign(obj, {
            currentTrack: null,
            nowPlaying: function () {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name} by ${this.currentTrack.artist}`)
                }
            }
        }),
        hasParktronic(obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                }
                
            }
        }
    }

    return assemblyLibrary;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
console.log(myCar);assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);


