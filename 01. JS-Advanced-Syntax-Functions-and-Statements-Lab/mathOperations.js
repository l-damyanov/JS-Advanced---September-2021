function mathOperations(number1, number2, string) {
    let result;
    switch (string) {
        case '+': result = number1 + number2; break;
        case '-': result = number1 - number2; break;
        case '/': result = number1 / number2; break;
        case '*': result = number1 * number2; break;
        case '%': result = number1 % number2; break;
        case '**': result = number1 ** number2; break;
    }
    console.log(result);
 }

 mathOperations(5, 6, "+");
 mathOperations(3, 5.5, "*");