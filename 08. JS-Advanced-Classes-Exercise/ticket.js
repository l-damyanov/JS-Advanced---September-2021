function sortTickets(arr, sortValue) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let el of arr) {
        let [destination, price, status] = el.split('|')
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    if (sortValue == 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortValue == 'price') {
        tickets.sort((a, b) => Number(a.price) - Number(b.price));
    } else {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return(tickets);
}

console.log(sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
));