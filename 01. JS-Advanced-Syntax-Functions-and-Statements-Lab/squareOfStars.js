function square(size) {
    if (size) {
        for (let i = 1; i <= size; i++) {
            console.log('* '.repeat(size));
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5));
        }
    }
}

square(1);
square(2);
square(5);
square();