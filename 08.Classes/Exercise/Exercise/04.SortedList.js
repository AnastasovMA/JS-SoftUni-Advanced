class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    validate(index){
        if (index < 0 || this.list.length - 1 < index) {
            throw new Error('Index must be in range.');
        }
    }
    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a,b) => a - b);
    }
    remove(index) {
        this.validate(index);
        this.list.splice(index, 1);
        this.size--;
        this.list.sort((a, b) => a - b);
    }
    get(index) {
        this.validate(index);
        return this.list[index];
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

