function extractText() {
    let ulElements = document.getElementsByTagName('li')
    let textAreaElement = document.getElementById('result')

    for (const liElement of ulElements) {
        textAreaElement.textContent += `${liElement.textContent}\n`
    }
}