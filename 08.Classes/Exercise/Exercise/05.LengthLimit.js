class Stringer {
    constructor(string, initalLength) {
        this.innerString = string;
        this.innerLength = Number(initalLength);
    }
    increase(length) {
        this.innerLength += Number(length);
    }
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        }
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.substring(0, this.innerLength)}...`
        }

        return this.innerString
    }
    // toString() {
    //     let resultString = this.innerString;
    //     if(resultString.length > this.innerLength){
    //         resultString = '';
    //         for (let index = 0; index < this.innerLength; index++) {
    //             resultString += this.innerString[index];
    //         }
    //     } if(resultString.length <= 3){
    //         resultString += '...';
    //     }
    //     return resultString;
    // }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); 

test.decrease(3);
console.log(test.toString()); 
test.decrease(5);
console.log(test.toString()); 
test.increase(4); 
console.log(test.toString()); 

