function solve() {
  let inputTextElement = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let result = ''

  if (namingConvention === 'Camel Case') {
    for (let index = 0; index < inputTextElement.length; index++) {
      if (inputTextElement[index] === ' ') {
        result += inputTextElement[index + 1].toUpperCase();
        index++;
      } else {
        result += inputTextElement[index];
      }
    }
  } else if (namingConvention === 'Pascal Case') {
    result += inputTextElement[0].toUpperCase();
    for (let index = 1; index < inputTextElement.length; index++) {
      if (inputTextElement[index] === ' ') {
        result += inputTextElement[index + 1].toUpperCase();
        index++;
      } else {
        result += inputTextElement[index];
      }
    }
  } else {
    result = 'Error!';
  }
  resultElement.textContent = result;
}