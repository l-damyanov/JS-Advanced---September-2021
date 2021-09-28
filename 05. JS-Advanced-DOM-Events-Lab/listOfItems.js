function addItem() {
    const list = document.getElementById('items');
    let li = document.createElement('li');
    let input = document.getElementById('newItemText');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = '';
}