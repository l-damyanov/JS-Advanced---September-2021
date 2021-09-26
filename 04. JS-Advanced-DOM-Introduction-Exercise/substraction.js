function substraction() {
    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);

    let result = num1 - num2;

    return document.getElementById('result').innerHTML = result;
}