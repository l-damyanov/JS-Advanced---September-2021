function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let textAreaElement = document.querySelector('#inputs textarea');

        let text = textAreaElement.value;
        let inputArr = JSON.parse(text);

        let restaurants = {};

        for (let i = 0; i < inputArr.length; i++) {
            let [restaurantName, workersString] = inputArr[i].split(' - ');
            let inputWorkers = workersString.split(', ').map(w => {
                let [name, salary] = w.split(' ');
                return {name, salary: Number(salary) };
            });

            if (!restaurants[restaurantName]) {
                restaurants[restaurantName] = {
                    workers: [],
                    restaurantName: restaurantName,
                    getAverageSalary: function(w) {
                        return w.reduce((acc, el) => acc + el, 0) / w.length;
                    }
                };
            }
            restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
        }

        let sortedRestaurants = Object.values(restaurants).sort((a, b) => {
            let bAvgSalary = b.workers.reduce((acc, el) => acc + el.salary, 0) / b.workers.length;
            let aAvgSalary = a.workers.reduce((acc, el) => acc + el.salary, 0) / a.workers.length;
            return bAvgSalary - aAvgSalary;
        });

        let bestRestaurant = sortedRestaurants[0];
        let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
        let averageSalary = (bestRestaurant.workers.reduce((acc, el) => acc + el.salary, 0) / bestRestaurant.workers.length).toFixed(2);

        let bestSalary = sortedWorkers[0].salary.toFixed(2);
        let topRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
        let workersString = sortedWorkers.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

        let bestRestaurantElement = document.querySelector('#bestRestaurant p');
        let workersElement = document.querySelector('#workers p');

        bestRestaurantElement.textContent = topRestaurantString;
        workersElement.textContent = workersString;
    }
}