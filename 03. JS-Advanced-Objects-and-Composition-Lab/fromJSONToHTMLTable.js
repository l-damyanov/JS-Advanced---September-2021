function solve(str) {
    jsonObj = JSON.parse(str);
    jsonObjKeys = Object.keys(jsonObj[0])
    cleanJsonObjKeys = [];
    for (let el of jsonObjKeys) {
        cleanJsonObjKeys.push(String(el).trim());
    }

    console.log('<table>')

    let rowStr = '   <tr>';
    for (let key of cleanJsonObjKeys) {
        rowStr += `<th>${escapeHtml(key)}</th>`
    }
    rowStr += '</tr>'
    console.log(rowStr);

    for (let el of jsonObj) {
        let rowValue = '   <tr>';
        for (let key of jsonObjKeys) {
            rowValue += `<td>${escapeHtml(el[key])}</td>`;
        }
        rowValue += '</tr>';
        console.log(rowValue);
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log('</table>')
}

solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
);