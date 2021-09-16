function greatestCommonDivisor(num1, num2) {
    let greatestDivisor = 0;
    let smallerNum = 0;
    if (num1 <= num2) {
        smallerNum = num1;
    } else {
        smallerNum = num2;
    }
    
    for (let i = smallerNum; i > 0; i--) {
        if (num1 % i == 0 && smallerNum % i == 0) {
            greatestDivisor = i;
            break
        }
    }
    console.log(greatestDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);