class Hex {
    constructor(number){
        this.value = number;
    }
    valueOf() {
        return this.value;
    }
    plus(value){
        let newVal = this.value + value;
        return new Hex(newVal)
    }
    minus(value){
        let newVal = this.value - value;
        return new Hex(newVal);
    }
    parse(str){
        return parseInt(typeof str === 'string' ? str : {str}, 16);
    }
    toString(){
        let hexString = '0x' + this.value.toString(16).toUpperCase();
        return hexString;
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
