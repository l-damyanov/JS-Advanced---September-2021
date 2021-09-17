function diagonals(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}

diagonals([[20, 40], [10, 60]]);