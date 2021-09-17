function equalNeighbours(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrix.length - 1) {
                if (matrix[i][j] == matrix[i+1][j]) {
                    count += 1;
                }
            }

            if (j < matrix[i].length) {
                if (matrix[i][j] == matrix[i][j + 1]) {
                    count += 1;
                }
            }
        }
    }
    return count;
}

console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

console.log(equalNeighbours([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
));