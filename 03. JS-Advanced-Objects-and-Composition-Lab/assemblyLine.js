function createAssemblyLine(car) {
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },

        hasAudio: (car) => {
            car.currentTrack = {'name': null, 'artist': null};
            car.nowPlaying = () => {
                if (currentTrack.name !== undefined) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                }
            };
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance < 0.5 ) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }
    }
}

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

const assemblyLine = createAssemblyLine(myCar);



assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

