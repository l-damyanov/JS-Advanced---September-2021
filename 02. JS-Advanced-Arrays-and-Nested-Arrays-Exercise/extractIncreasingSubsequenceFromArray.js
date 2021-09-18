function solve(arr) {
    const result = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;
    
    arr.forEach(element => {
        if (element >= biggestNum) {
            result.push(element);
            biggestNum = element;
        }
    });
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));