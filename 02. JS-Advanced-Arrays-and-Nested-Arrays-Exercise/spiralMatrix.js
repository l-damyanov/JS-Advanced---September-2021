function spiral(x, y) {
    let result = [];

    for (let i = 0; i < x; i++) {
        result.push([]);
    }

    let counter = 1;
    let startRow = 0;
    let endRow = x - 1;
    let startCol = 0;
    let endCol = y - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    formatedResult = []

    for (let i = 0; i < x; i++) {
        formatedResult.push(result[i].join(' '));
    }

    console.log(formatedResult.join('\n'));
}

spiral(5, 5);