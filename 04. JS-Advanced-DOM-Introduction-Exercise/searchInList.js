function search() {
    const towns = document.getElementById('towns').children;
    const searchInfo = document.getElementById('searchText').value;

    let matches = [];

    for (let town of Array.from(towns)) {
        if (town.textContent.toLowerCase().includes(searchInfo.toLowerCase())) {
            matches.push(town.textContent);
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
        }
    }

    document.getElementById('result').innerHTML = `${matches.length} matches found`;
}