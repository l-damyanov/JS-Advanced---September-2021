const dealership = require('./dealership');
const expect = require('chai').expect;

describe('Test dealership', () => {
    describe('Test newCarCost functionality', () => {
        it('if returning old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.equal(0);
            expect(dealership.newCarCost('Audi A8 D5', 20000)).to.equal(-5000);
            expect(dealership.newCarCost('Audi TT 8J', 20000)).to.equal(6000);
        });
        
        it('if returning new car', () => {
            expect(dealership.newCarCost('Nissan GRT', 40000)).to.equal(40000);
        });
    });

    describe('Test carEquipment functionality', () => {
        it('if extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'tainted windows', 'turbo'], [3, 1])).to.deep.equal(['turbo', 'sliding roof']);
        });

        it('if not extras', () => {
            expect(dealership.carEquipment([], [])).to.deep.equal([]);
        });
    });

    describe('Test euroCategory functionality', () => {
        it('if number is less than 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        })

        it('if number is equal or greater than 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });
});