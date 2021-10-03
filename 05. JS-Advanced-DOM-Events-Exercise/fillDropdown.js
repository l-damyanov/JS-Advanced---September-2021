function addItem() {
    const menu = document.getElementById('menu');
    const newItemText = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;

    let newElement = document.createElement('option');
    newElement.textContent = newItemText;
    newElement.value = newItemValue;
    menu.appendChild(newElement)

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}