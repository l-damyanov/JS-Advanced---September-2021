function getFibonator() {
   let num1 = 0;
   let num2 = 1;
   
   function getNumber() {
        let nextNumber = num1 + num2;
        num2 = num1;
        num1 = nextNumber;
        return nextNumber;
   }

   return getNumber;
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
