function dayOfWeek(input) {
    let weekDays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    };

    if (input in weekDays) {
        return weekDays[input];
    } else {
        return 'error';
    }
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('Invalid'));