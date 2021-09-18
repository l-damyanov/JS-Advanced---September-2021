function solve(arr, n) {
    for (i = 1; i <= n; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);