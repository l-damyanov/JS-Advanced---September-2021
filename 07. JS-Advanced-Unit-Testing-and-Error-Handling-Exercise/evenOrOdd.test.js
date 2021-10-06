const expect = require('chai').expect;
const isOddOrEven = require('./evenOrOdd');

describe('Test Odd Or Even', () => {
    it('Test invalid input', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Test if odd is returned', () => {
        expect(isOddOrEven('asd')).to.equal('odd');
    });

    it('Test if even is returned', () => {
        expect(isOddOrEven('asda')).to.equal('even');
    });
});