function solve(arr) {
    let cities = {};

    for (let cityInfo of arr) {
        let [city, population] = cityInfo.split('<->');
        if (city in cities) {
            cities[city] += Number(population);
        } else {
            cities[city] = Number(population);
        }
        
    }

    for (let k in cities) {
        console.log(`${k}: ${cities[k]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);