function addItem() {
    let ulElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    ulElements.appendChild(liElement);
    inputElement.value = '';
}