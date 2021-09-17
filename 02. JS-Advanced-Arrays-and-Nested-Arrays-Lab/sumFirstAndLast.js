function sumFirstAndLast(arr) {
    let firstEl = Number([...arr].shift());
    let lastEl = Number([...arr].pop());
    let result = firstEl + lastEl;
    return result;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));
console.log(sumFirstAndLast(['25']));