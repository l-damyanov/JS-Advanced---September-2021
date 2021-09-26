function solve() {
    const text = document.getElementById('text').value.split(' ');
    const convention = document.getElementById('naming-convention').value;

    const result = [];

    if (convention == 'Camel Case') {
        result.push(text[0].toLowerCase());
        for (let i = 1; i < text.length; i++) {
            result.push(text[i][0].toUpperCase() + text[i].slice(1, text[i].length).toLowerCase());
        }
    } else if (convention == 'Pascal Case') {
        for (let i = 0; i < text.length; i++) {
            result.push(text[i][0].toUpperCase() + text[i].slice(1, text[i].length).toLowerCase())
        }
    } else {
        return document.getElementById('result').innerHTML = "Error!";
    }

    return document.getElementById('result').innerHTML = result.join('');
}