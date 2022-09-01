function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  // let result = [];
  let textArr = inputElement.value.split('.').filter(x => x !== '');

  while(textArr.length > 0) {
    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    outputElement.appendChild(p);
  }

  // let inputArray = Array.from(inputElement.split('.'));
  // for (const sentence of inputArray) {
  //   if (sentence.length > 0) {
  //     let resultSentence = sentence + ".";
  //     result.push(resultSentence);
  //   }
  // }

  // for (let i = 0; i < result.length; i += 3) {
  //   let p = document.createElement('p');
  //   p.textContent = result.slice(i, i + 4);
  //   outputElement.appendChild(p);
  // }
}