const expect = require('chai').expect;
const { sum } = require('./sumOfNumbers');

describe('Test sum functionality', () => {
    it ('expect to return correct output', () => {
        expect(sum([1, 2, 3])).to.equal(6);
        expect(sum([])).to.equal(0);
        expect(sum([1])).to.equal(1);
        expect(sum([1, 2, -3])).to.equal(0);
    });
});