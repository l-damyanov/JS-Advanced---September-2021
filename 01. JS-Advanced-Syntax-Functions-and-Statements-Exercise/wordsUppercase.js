function wordsUppercase(text) {
    let words = text.match(/\w+/g);
    resultString = '';

    for (let word of words) {
        resultString += word.toUpperCase() + ', ';
    }
    resultString = resultString.slice(0, -2); 

    console.log(resultString);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');