function solve(arr) {
    let bottles = {};
    let stock = {};

    for (let data of arr) {
        let [flavour, quantity] = data.split(' => ');
        
        if (!stock[flavour]) {
            stock[flavour] = 0;
        }
        stock[flavour] += Number(quantity);
        if (stock[flavour] / 1000 >= 1) {
            let value = Math.floor(stock[flavour] / 1000);
            if (!bottles[flavour]) {
                bottles[flavour] = 0;
            }
            bottles[flavour] += value
            stock[flavour] -= value * 1000;
        }
    }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);