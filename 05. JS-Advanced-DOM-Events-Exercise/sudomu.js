function solve() {
    const quickCheckBtn = document.getElementsByTagName('button')[0].addEventListener('click', quickCheck);
    const clearBtn = document.getElementsByTagName('button')[1].addEventListener('click', clear);
    const divParagraph = document.getElementById('check');
    const tableElements = document.querySelectorAll('input');
    const table = document.querySelector('table');

    function quickCheck () {
        let matrix = [
            [tableElements[0].value, tableElements[1].value, tableElements[2].value],
            [tableElements[3].value, tableElements[4].value, tableElements[5].value],
            [tableElements[6].value, tableElements[7].value, tableElements[8].value]
        ];
        isSudomu = true;
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }

        if (isSudomu) {
            table.style.border = '2px solid green';
            divParagraph.children[0].textContent = 'You solve it! Congratulations!';
            divParagraph.children[0].style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            divParagraph.children[0].textContent = 'NOP! You are not done yet...';
            divParagraph.children[0].style.color = 'red';
        }

    }

    function clear() {
        for (let input of tableElements) {
            input.value = '';
        }
        table.style.border = '';
        divParagraph.children[0].textContent = '';
    }
}