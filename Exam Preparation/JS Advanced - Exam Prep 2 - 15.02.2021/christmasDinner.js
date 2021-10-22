class ChristmasDinner {
    constructor(budget) {
        if (budget <= 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let [productType, productPrice] = product;
        
        if (Number(this.budget) < Number(productPrice)) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(productType);
        this.budget -= Number(productPrice);
        return `You have successfully bought ${productType}!`;
    }

    recipes(recipe) {
        let recipeName = recipe['recipeName'];
        let productsList = recipe['productsList'];

        for (let product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(d => d['recipeName'] == dish)) {
            throw new Error("We do not have this dish");
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        for (let guest in this.guests) {
            let dish = this.dishes.filter(d => d['recipeName'] == this.guests[guest])[0];

            result.push(`${guest} will eat ${this.guests[guest]}, which consists of ${dish['productsList'].join(', ')}`);
        }

        return result.join('\n');
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

console.log(dinner.guests)