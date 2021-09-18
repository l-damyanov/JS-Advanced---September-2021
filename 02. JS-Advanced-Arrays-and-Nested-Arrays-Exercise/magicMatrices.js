function solve(matrix) {
    let magicSums = [];

    let rowSum = 0;
    let colSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        rowSum = 0;
        colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
             rowSum += matrix[i][j];
             colSum += matrix[j][i];
        }
        magicSums.push(rowSum, colSum);
    }

    let isMagical = sums => sums.every(v => v === sums[0]);
    return isMagical(magicSums);
}

console.log(solve([[4, 5, 6],[6, 5, 4],[5, 5, 5]]));
console.log(solve([[11, 32, 45],[21, 0, 1],[21, 1, 1]]));
console.log(solve([[1, 0, 0],[0, 0, 1],[0, 1, 0]]));