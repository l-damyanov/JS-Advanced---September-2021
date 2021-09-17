function process(arr) {
    const oddNums = arr.filter((v, i) => i % 2 == 1);
    const doubled = oddNums.map(x => x * 2);
    doubled.reverse();

    return doubled.join('\n')
}

console.log(process([10, 15, 20, 25]));
console.log(process([3, 0, 10, 4, 7, 3]));