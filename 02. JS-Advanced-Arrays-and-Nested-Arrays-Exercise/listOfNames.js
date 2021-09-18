function solve(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    for (let name of sortedArr) {
        console.log(`${sortedArr.indexOf(name) + 1}.${name}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);