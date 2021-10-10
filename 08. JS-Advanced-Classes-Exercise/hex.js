class Hex {
    constructor (value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexString = `0x${this.value.toString(16).toUpperCase()}`
        return hexString;
    }

    plus(number) {
        let newValue = this.value + number;
        let hexNumber = `0x${newValue.toString(16).toUpperCase()}`
        return new Hex(hexNumber);
    }

    minus(number) {
        let newValue = this.value - number;
        let hexNumber = `0x${newValue.toString(16).toUpperCase()}`
        return new Hex(hexNumber);
    }

    parse(string) {
        let hex = parseInt(string, 16);
        return hex;
    }
}   

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));