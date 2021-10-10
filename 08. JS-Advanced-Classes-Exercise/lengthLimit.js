class Stringer {
    constructor (word, wordLength) {
        this.innerString = word;
        this.innerLength = wordLength;
        this.decreased = false;
    }

    increase(sizeLength) {
        this.innerLength += sizeLength;
    }

    decrease(sizeLength) {
        if (this.innerLength - sizeLength < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= sizeLength;
        }
        this.decreased = true;
    }

    toString() {
        let w = this.innerString.substring(0, this.innerLength);
        if (this.decreased) {
            this.decreased = false;
            w += '...';
            return w;
        }
        return w;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test