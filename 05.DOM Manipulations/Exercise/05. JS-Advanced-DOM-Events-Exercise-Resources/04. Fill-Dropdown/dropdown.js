function addItem() {
    let itemTextElement = document.getElementById('newItemText');
    let itemValueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = `${itemTextElement.value} - ${itemValueElement.value}`;
    menuElement.appendChild(optionElement);

    itemValueElement.value = '';
    itemTextElement.value = '';
}