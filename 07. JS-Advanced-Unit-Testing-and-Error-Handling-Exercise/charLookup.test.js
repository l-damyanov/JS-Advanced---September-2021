const expect = require('chai').expect;
const lookupChar = require('./charLookup');

describe('Test Char LookUp', () => {
    it ('return undefined when type is incorrect', () => {
        expect(lookupChar(33, 1)).to.be.undefined;
        expect(lookupChar('hello', 'string')).to.be.undefined;
        expect(lookupChar([], [])).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;
        expect(lookupChar('hello', 1.1)).to.be.undefined;
    }) ;

    it ('return Incorrect Index when index is not valid', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', 99)).to.equal('Incorrect index');
    });

    it ('returns correct output', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    });
});