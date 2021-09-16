function cooking(num, action1, action2, action3, action4, action5) {
    let actions = [action1, action2, action3, action4, action5];
    let result = Number(num);

    for (let i = 0; i < 5; i++) {
        if (actions[i] == 'chop') {
            result = result / 2;
            console.log(result);
        } else if (actions[i] == 'dice') {
            result = Math.sqrt(result);
            console.log(result);
        } else if (actions[i] == 'spice') {
            result += 1;
            console.log(result);
        } else if (actions[i] == 'bake') {
            result *= 3;
            console.log(result);
        } else if (actions[i] == 'fillet') {
            result = result - (result * 0.2);
            console.log(result);
        }
    }
}

// cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");