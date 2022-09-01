function solve(ticketsArr, sortingFactor){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    for (const ticketInfo of ticketsArr) {
        let [destination, price, status] = ticketInfo.split('|')
        let currentTicket = new Ticket(destination, Number(price), status);
        result.push(currentTicket);
    }

    result.sort((x, y) => typeof x[sortingFactor] === 'string'
        ? x[sortingFactor].localeCompare(y[sortingFactor])
        : x[sortingFactor] - y[sortingFactor]);

    return result;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));
