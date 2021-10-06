const expect = require('chai').expect;
const mathEnforcer = require('./mathEnforcer');

describe('Test mathEnforcer addFive', () => {
    it('expect undefined on wrong input type', () => {
        expect(mathEnforcer.addFive()).to.be.undefined;
        expect(mathEnforcer.addFive("5")).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-10)).to.equal(-5);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    });
});

describe('Test mathEnforcer subtractTen', () => {
    it('expect undefined on wrong input type', () => {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
        expect(mathEnforcer.subtractTen("5")).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    });
});

describe('Test mathEnforcer sum', () => {
    it('expect undefined on wrong input type', () => {
        expect(mathEnforcer.sum()).to.be.undefined;
        expect(mathEnforcer.sum("5", 2)).to.be.undefined;
        expect(mathEnforcer.sum([], 2)).to.be.undefined;
        expect(mathEnforcer.sum({}, 2)).to.be.undefined;
        expect(mathEnforcer.sum(2)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, 2)).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.sum(5, 5)).to.equal(10);
        expect(mathEnforcer.sum(20, -20)).to.equal(0);
        expect(mathEnforcer.sum(-10, -20)).to.equal(-30);
        expect(mathEnforcer.sum(5.05, -1.00)).to.be.closeTo(4.05, 0.01);
        expect(mathEnforcer.sum(5.05, 1.30)).to.be.closeTo(6.35, 0.01);
    });
});