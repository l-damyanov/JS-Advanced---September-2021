function biggestEl(matrix) {
    let nums = [];
    for (let i = 0; i < matrix.length; i++) {
        nums.push(Math.max(...matrix[i]));
    }
    let biggestNum = Math.max(...nums);
    console.log(biggestNum);
}

biggestEl([[20, 50, 10],[8, 33, 145]]);
biggestEl([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]);