const StringBuilder = require('./stringBuilder');
const expect = require('chai').expect;

describe('Test StringBuilder', () => {
    describe('Test initialization', () => {
        it('Initialize correctly with string', () => {
            let test = new StringBuilder('test');
            expect(typeof(test)).to.equal('object');
            expect(test._stringArray).to.deep.equal([ 't', 'e', 's', 't' ]);
        });

        it('Initialize with undefined', () => {
            let test = new StringBuilder(undefined);
            expect(test._stringArray).to.deep.equal([]);
        });

        it('Initialize incorrectly should throw error', () => {
            expect(() => new StringBuilder(1)).to.throw('Argument must be a string');
            expect(() => new StringBuilder(1.5)).to.throw('Argument must be a string');
            expect(() => new StringBuilder([])).to.throw('Argument must be a string');
            expect(() => new StringBuilder({})).to.throw('Argument must be a string');
            expect(() => new StringBuilder(true)).to.throw('Argument must be a string');
            expect(() => new StringBuilder(0)).to.throw('Argument must be a string');
            expect(() => new StringBuilder(null)).to.throw('Argument must be a string');
        })
    });

    describe('Test append functionality', () => {
        it('Append with correct value', () => {
            let test = new StringBuilder('test');
            test.append(' two');
            expect(test._stringArray).to.deep.equal(['t', 'e', 's', 't', ' ', 't', 'w', 'o']);
        })

        it('Append with incorrect value', () => {
            let test = new StringBuilder('test');
            expect(() => test.append(1)).to.throw('Argument must be a string');
            expect(() => test.append(1.5)).to.throw('Argument must be a string');
            expect(() => test.append([])).to.throw('Argument must be a string');
            expect(() => test.append({})).to.throw('Argument must be a string');
            expect(() => test.append(true)).to.throw('Argument must be a string');
            expect(() => test.append(0)).to.throw('Argument must be a string');
            expect(() => test.append(null)).to.throw('Argument must be a string');
        });
    });

    describe('Test prerend functionality', () => {
        it('Prepend with correct value', () => {
            let test = new StringBuilder('test');
            test.prepend('Second ');
            expect(test._stringArray).to.deep.equal(['S', 'e', 'c', 'o','n', 'd', ' ', 't','e', 's', 't']);
        })

        it('Prepend with incorrect value', () => {
            let test = new StringBuilder('test');
            expect(() => test.prepend(1)).to.throw('Argument must be a string');
            expect(() => test.prepend(1.5)).to.throw('Argument must be a string');
            expect(() => test.prepend([])).to.throw('Argument must be a string');
            expect(() => test.prepend({})).to.throw('Argument must be a string');
            expect(() => test.prepend(true)).to.throw('Argument must be a string');
            expect(() => test.prepend(0)).to.throw('Argument must be a string');
            expect(() => test.prepend(null)).to.throw('Argument must be a string');
        });
    });

    describe('Test insertAt functionality', () => {
        it('InsertAt with correct value', () => {
            let test = new StringBuilder('test');
            test.insertAt('yee', 2);
            expect(test._stringArray).to.deep.equal(['t', 'e', 'y', 'e', 'e', 's', 't']);
        })

        it('InsertAt with correct value when string is empty', () => {
            let test = new StringBuilder('');
            test.insertAt('yee', 0);
            expect(test._stringArray).to.deep.equal(['y', 'e', 'e']);
        })

        it('InsertAt with incorrect value', () => {
            let test = new StringBuilder('test');
            expect(() => test.insertAt(1, 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt(1.5, 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt([], 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt({}, 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt(true, 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt(0, 2)).to.throw('Argument must be a string');
            expect(() => test.insertAt(null, 2)).to.throw('Argument must be a string');
        });
    });

    describe('Test remove functionality', () => {
        it('Remove with correct value', () => {
            let test = new StringBuilder('test');
            test.remove(2, 2);
            expect(test._stringArray).to.deep.equal(['t', 'e']);
        })

        it('Remove when string out of range', () => {
            let test = new StringBuilder('test');
            test.remove(5, 2);
            expect(test._stringArray).to.deep.equal(['t', 'e', 's', 't']);
        });
    });

    describe('Test toString functionality', () => {
        it('should return joined string by "" when string is not undefined', () => {
            let test = new StringBuilder('test two');
            expect(test.toString()).to.equal('test two');
        })

        it('should return joined string by "" when string is undefined', () => {
            let test = new StringBuilder('');
            expect(test.toString()).to.equal('');
        })
    });

    describe('Test _vrfyParam', () => {
        it('When param is correct', () => {
            expect(() => new StringBuilder('test')._vrfyParam('string')).to.not.throw('Argument must be a string');
        });
    })
});