function encodeAndDecodeMessages() {
    let encodeTextArea = document.querySelectorAll('textarea')[0];
    let decodeTextArea = document.querySelectorAll('textarea')[1];
    let encodedString = '';
    let decodedString = '';

    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];

    encodeButton.addEventListener('click', function () {
        encodedString = '';
        for (let index = 0; index < encodeTextArea.value.length; index++) {
            let nextASCIIChar = encodeTextArea.value.charCodeAt(index) + 1;
            let codeChar = String.fromCharCode(nextASCIIChar);
            encodedString += codeChar;
        }
        encodeTextArea.value = '';
        decodeTextArea.value = encodedString;
    })

    decodeButton.addEventListener('click', function () {
        decodedString = '';
        for (let index = 0; index < decodeTextArea.value.length; index++) {
            let previousASCIIChar = decodeTextArea.value.charCodeAt(index) - 1;
            let codeChar = String.fromCharCode(previousASCIIChar);
            decodedString += codeChar;
        }
        decodeTextArea.value = decodedString;
    })
}