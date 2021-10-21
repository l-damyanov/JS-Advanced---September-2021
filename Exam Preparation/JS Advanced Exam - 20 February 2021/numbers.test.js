const numberOperations = require('./numbers');
const expect = require('chai').expect;

describe('Test numberOperations', () => {
    describe('Test powNumber functionality', () => {
        it('should return correct result', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        })
    });

    describe('Test numberChecker functionality', () => {
        it('if input is not a number', () => {
            expect(numberOperations.numberChecker.bind(('string'))).to.throw('The input is not a number!');
        });

        it('if input is number and is lower than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
        });

        it('if input is number and is greater or equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(999)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('Test sumArrays functionality', () => {
        it('should return correct result', () => {
            expect(numberOperations.sumArrays([1, 3, 4], [2])).to.deep.equal([3, 3, 4]);
            expect(numberOperations.sumArrays([1, 3, 4], [3, 1, 0])).to.deep.equal([4, 4, 4]);
            expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
        });
    });
});