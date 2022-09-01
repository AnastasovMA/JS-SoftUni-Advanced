function subtract() {
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');

    let sum = num1.value - num2.value;

    document.getElementById('result').textContent = sum;
}