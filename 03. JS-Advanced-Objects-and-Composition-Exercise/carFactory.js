function solve(car) {
    const result = {};

    function getEngine(power) {
        if (power <= 90) {
            return {power: 90, volume: 1800};
        } else if (power <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    }

    const properWheelSize = car.wheelsize % 2 == 0 ? car.wheelsize - 1 : car.wheelsize;
    result.model = car.model;
    result.engine = getEngine(car.power);
    result.carriage = {type: car.carriage, color: car.color};
    result.wheels = new Array(4).fill(properWheelSize, 0, 4);

    return result;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));