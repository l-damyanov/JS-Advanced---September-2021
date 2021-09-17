function smallest(arr) {
    let index1 = arr.indexOf(Math.min(...arr));
    let num1 = arr.splice(index1, 1);
    let index2 = arr.indexOf(Math.min(...arr));
    let num2 = arr.splice(index2, 1);
    console.log(num1 + ' ' + num2);
}

smallest([30, 15, 50, 5]);