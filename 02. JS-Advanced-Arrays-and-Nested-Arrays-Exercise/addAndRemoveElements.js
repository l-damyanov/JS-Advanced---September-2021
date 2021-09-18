function solve(arr) {
    let initialNum = 1;
    let result = [];

    for (let command of arr) {
        if (command == 'add') {
            result.push(initialNum);
        } else if (command == 'remove') {
            result.pop();
        }
        initialNum += 1;
    }

    if (result.length) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);