function solve() {
    let count = {};

    for (let el of arguments) {
        if (!count[typeof(el)]) {
            count[typeof(el)] = 0;
        }
        count[typeof(el)] += 1;
        console.log(`${typeof(el)}: ${el}`);
    }

    let countList = [];
    for (let el in count) {
        countList.push([el, count[el]])
    }

    countList.sort(function(a, b) {
        return b[1] - a[1];
    });


    for (let el of countList) {
        console.log(`${el[0]} = ${el[1]}`)
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({},  3.333, 9.999,);