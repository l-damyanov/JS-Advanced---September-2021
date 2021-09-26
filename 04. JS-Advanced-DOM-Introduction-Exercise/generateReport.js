function generateReport() {
    let input = Array.from(document.getElementsByTagName('input'));
    let rows = Array.from(document.getElementsByTagName('tr'));

    const result = [];
    const checkedCols = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const obj = {};

        for (let j = 0; j < row.children.length; j++) {
            const element = row.children[j];
            
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(j);
                }

                continue;
            }
            
            if (checkedCols.includes(j)) {
                let propertyName = input[j].name;
                obj[propertyName] = element.textContent;
            }
        }

        if (i != 0) {
            result.push(obj);
        }

    }

    document.getElementById('output').value = JSON.stringify(result);
    
}