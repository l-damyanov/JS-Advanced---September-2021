function solution(n) {
    return function(m) {
        return n + m;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));