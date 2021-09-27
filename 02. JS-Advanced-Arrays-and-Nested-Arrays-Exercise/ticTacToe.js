function solve(arr) {

    function hasWin(field, coordinates) {
        const [x, y] = coordinates;
        if (field[0][y] == field[1][y] && field[0][y] == field[2][y] && field[1][y] == field[2][y] && field[0][y] != false) {
            return true;
        } else if (field[x][0] == field[x][1] && field[x][0] == field[x][2] && field[x][1] == field[x][2] && field[x][0] != false) {
            return true
        } else if ((field[0][0] == field[1][1] && field[0][0] == field[2][2] && field[1][1] == field[2][2] && field[0][0] != false)
         || (field[0][2] == field[1][1] && field[0][2] == field[2][0] && field[1][1] == field[2][0] && field[0][2] != false)) {
            return true;
        } else {
            return false;
        }
    }

    function printResult(field) {
        field.forEach(element => {
            console.log(element.join('\t'));
        });
    }

    let gameWon = false;

    let playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayerSign = 'X';

    for (let i = 0; i < arr.length; i++) {
        const [x, y] = arr[i].split(' ');
        
        if (playField[0].includes(false) || playField[1].includes(false) || playField[2].includes(false)){
            //pass
        } else {
            break
        }

        if (playField[x][y]) {
            console.log("This place is already taken. Please choose another!");
        } else {
            playField[x][y] = currentPlayerSign;

            if (hasWin(playField, [x, y])) {
                gameWon = true;
                console.log(`Player ${currentPlayerSign} wins!`);
                printResult(playField);
                break;
            }
            currentPlayerSign = currentPlayerSign == 'X' ? 'O' : 'X';
        }
    }
    if (!gameWon) {
        console.log("The game ended! Nobody wins :(");
        printResult(playField);
    }
}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);