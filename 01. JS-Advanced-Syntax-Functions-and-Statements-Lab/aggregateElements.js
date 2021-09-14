// function aggregateElements(elements) {
//     aggregate(elements, 0, (a, b) => a + b);
//     aggregate(elements, 0, (a, b) => a + 1 / b);
//     aggregate(elements, '', (a, b) => a + b);

//     function aggregate(arr, initVal, func) {
//         let val = initVal;
//         for (let i = 0; i < arr.length; i++) {
//             val = func(val, arr[i]);
//         }
//         console.log(val);
//     }
// }

function aggregateElements(elements) {
    let sumOfElements = 0;
    let inverseValuesOfElements = 0;
    let concatOfElements = '';

    for (let i = 0; i < elements.length; i++) {
        sumOfElements += elements[i];
        inverseValuesOfElements += 1 / elements[i];
        concatOfElements += String(elements[i]);
    }

    console.log(sumOfElements);
    console.log(inverseValuesOfElements);
    console.log(concatOfElements);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);