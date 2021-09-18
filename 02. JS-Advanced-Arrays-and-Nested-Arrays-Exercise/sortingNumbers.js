function solve(arr) {
    let size = arr.length;
    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < size; i++) {
        result.push(sortedArr.shift());
        sortedArr.reverse();
    }
    
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));