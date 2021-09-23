function solve(arr) {
    const dict = {};

    for (let i = 0; i < arr.length; i+=2) {
        dict[arr[i]] = Number(arr[i + 1]); 
    }

    console.log(dict);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);