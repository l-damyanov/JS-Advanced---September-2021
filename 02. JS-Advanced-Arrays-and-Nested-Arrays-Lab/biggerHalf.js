function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let size = Math.ceil((arr.length / 2))
    let biggerHalfArr = [];

    for (let i = arr.length - 1; i >= arr.length - size; i--) {
        biggerHalfArr.push(sorted[i]);
    }

    return biggerHalfArr.reverse()
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));