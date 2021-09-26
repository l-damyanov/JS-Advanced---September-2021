function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    
    let element = document.getElementById('extra')

    if (btn.textContent == 'More') {
        element.style.display = 'block';
        btn.textContent = 'Less';
    } else if (btn.textContent == 'Less') {
        element.style.display = 'none';
        btn.textContent = 'More';
    }
}