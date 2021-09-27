function solve(matrix) {
    let splitMatrix = [];
    let result = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row of matrix) {
        row = row.split(" ").map(Number);
        splitMatrix.push(row);
    }
    

    for (let i = 0; i < splitMatrix.length; i++) {
        firstDiagonal += Number(splitMatrix[i][i]);
        secondDiagonal += Number(splitMatrix[i][splitMatrix.length - i - 1]);
    }

    if (firstDiagonal == secondDiagonal) {
        for (let i = 0; i < splitMatrix.length; i++) {
            for (let j = 0; j < splitMatrix[i].length; j++) {
                if (i !== j && i !== splitMatrix.length - 1 - j) {
                    splitMatrix[i][j] = firstDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < splitMatrix.length; i++) {
        result.push(splitMatrix[i].join(' '));
    }

    return result.join('\n');
}

console.log(solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
));