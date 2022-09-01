function checkNumbers(number){
    let isSame = true;
    const arrayOfDigits = Array.from(String(number), Number);
    let digitToComapre = arrayOfDigits[0];
    let sum = 0;
    for (let index = 0; index < arrayOfDigits.length; index++) {
        let currentDigit = arrayOfDigits[index];
        if (digitToComapre !== currentDigit) {
            isSame = false;
        }
        sum += currentDigit;
    }
    console.log(isSame);
    console.log(sum);
}
checkNumbers(1234);