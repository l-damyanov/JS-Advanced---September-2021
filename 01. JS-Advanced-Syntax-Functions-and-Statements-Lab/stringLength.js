function stringLength(w1, w2, w3) {
    let wholeWord = w1 + w2 + w3;
    let wholeLength = wholeWord.length;
    let averageLength = wholeLength / 3;
    console.log(wholeLength);
    console.log(Math.floor(averageLength))
}

stringLength("chocolate", "ice cream", "cake");