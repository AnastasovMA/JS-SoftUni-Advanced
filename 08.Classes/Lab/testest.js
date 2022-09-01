let map = new Map();
map.set(2, 'two');
map.set(1, 'one');
map.set(5, 'five');
map.set(4, 'four');

let entries = Array.from(map.entries());
let sortArr = entries.sort((a, b) => a[1].localeCompare(b[1]));

for (const iterator of sortArr) {
    console.log(iterator);
}