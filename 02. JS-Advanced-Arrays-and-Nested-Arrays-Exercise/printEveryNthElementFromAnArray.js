function solve(arr, n) {
    let newArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (i % n == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));

console.log(solve(['dsa','asd', 'test', 'tset'], 2));

console.log(solve(['1', '2','3', '4', '5'], 6));