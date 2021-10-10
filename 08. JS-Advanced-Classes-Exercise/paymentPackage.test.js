const PaymentPackage = require('./paymentPackage');
const expect = require('chai').expect;


describe('Test Payment Package', () => {
    describe('Test initialization', () => {
        it('Class has correct parameters', () => {
            let testPackage = new PaymentPackage('Test', 100);
            expect(testPackage._name).to.equal('Test');
            expect(testPackage._value).to.equal(100);
            expect(testPackage._VAT).to.equal(20);
            expect(testPackage._active).to.equal(true);
        });
    });

    describe('Test name', () => {
        it('Should throw an error with incorrect value', () => {
            expect(() => new PaymentPackage(1, 100).to.throw('Name must be a non-empty string'));
            expect(() => new PaymentPackage(['test'], 100).to.throw('Name must be a non-empty string'));
            expect(() => new PaymentPackage({}, 100).to.throw('Name must be a non-empty string'));
            expect(() => new PaymentPackage(1.5, 100).to.throw('Name must be a non-empty string'));
            expect(() => new PaymentPackage('', 100).to.throw('Name must be a non-empty string'));
        });

        it('Should not throw an error when value is correct', () => {
            expect(() => new PaymentPackage('Name', 100).to.not.throw('Name must be a non-empty string'));
        });
    });

    describe('Test value', () => {
        it('Should throw an error with incorrect value', () => {
            expect(() => new PaymentPackage('Test', 'string').to.throw('Value must be a non-negative number'));
            expect(() => new PaymentPackage('Test', -1).to.throw('Value must be a non-negative number'));
            expect(() => new PaymentPackage('Test', [123]).to.throw('Value must be a non-negative number'));
            expect(() => new PaymentPackage('Test', {}).to.throw('Value must be a non-negative number'));
            expect(() => new PaymentPackage('Test', false).to.throw('Value must be a non-negative number'));
        });
        it('Should not throw an error when value is correct', () => {
            expect(() => new PaymentPackage('Name', 100).to.not.throw('Value must be a non-negative number'));
            let testPackage = new PaymentPackage('Test', 100);
            expect(() => testPackage.value = 0).to.not.throw('Value must be a non-negative number');
        });
    });

    describe('Test VAT', () => {
        it('Should throw an error with incorrect value', () => {
            let testPackage = new PaymentPackage('Test', 100);
            expect(() => testPackage.VAT = -1).to.throw('VAT must be a non-negative number');
            expect(() => testPackage.VAT = 'string').to.throw('VAT must be a non-negative number');
            expect(() => testPackage.VAT = [123]).to.throw('VAT must be a non-negative number');
            expect(() => testPackage.VAT = {}).to.throw('VAT must be a non-negative number');
        });

        it('Should not throw an error when value is correct', () => {
            expect(() => testPackage.VAT = 30).to.not.throw('VAT must be a non-negative number');
        });
    });

    describe('Test active', () => {
        it('Should throw an error with incorrect value', () => {
            let testPackage = new PaymentPackage('Test', 100);
            expect(() => testPackage.active = 1).to.throw('Active status must be a boolean');
            expect(() => testPackage.active = -1).to.throw('Active status must be a boolean');
            expect(() => testPackage.active = 'string').to.throw('Active status must be a boolean');
            expect(() => testPackage.active = [true]).to.throw('Active status must be a boolean');
            expect(() => testPackage.active = {}).to.throw('Active status must be a boolean');
        });
        
        it('Should not throw an error when value is correct', () => {
            expect(() => testPackage.active = false).to.not.throw('Active status must be a boolean');
        });
    });

    describe('Test toString', () => {
        it ('Should return a string as all the input is correct - 1', () => {
            let flagClass = new PaymentPackage('abc', 123);
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it ('Should return a string as all the input is correct - 2', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it ('Should return a string as all the input is correct - 3', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it ('Should return a string as all the input is correct - 4', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });
});