function solve(arr) {
    const [width, height, x, y] = arr;
    matrix = [];

    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push('empty');
        }
        matrix.push(row);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    for (let i = 0; i < height; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve([4, 4, 0, 0]);