function sameNumbers(number) {
    let num = number.toString();
    let itsTheSame = true;

    for (let i = 1; i < num.length; i++) {
        if (num[i] != num[0]) {
            console.log(false);
            itsTheSame = false;
            break
        }
    }
    if (itsTheSame) {
        console.log(true);
    }
    

    let totalSum = 0;

    for (let i = 0; i < num.length; i++) {
        totalSum += Number(num[i])
    }
    console.log(totalSum)
}

sameNumbers(2222222);
sameNumbers(1234);