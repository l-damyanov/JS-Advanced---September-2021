function solve(arr) {
    const result = [];

    let doMath = {
        '+': function (x, y) { return y + x},
        '-': function (x, y) { return y - x},
        '*': function (x, y) { return y * x},
        '/': function (x, y) { return y / x}
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'number') {
            result.push(arr[i]);
        } else {
            if (result.length >= 2) {
                let num1 = result.pop(result.length);
                let num2 = result.pop(result.length - 1);
                result.push(doMath[arr[i]](num1, num2));
            } else {
                return "Error: not enough operands!"
            }
            
        }
    }

    if (result.length != 1) {
        return "Error: too many operands!"
    } else {
        return result[0];
    }
}

console.log(solve([3, 4, '+']));

console.log(solve([5, 3, 4, '*', '-']));

console.log(solve(7, 33, 8, '-'));