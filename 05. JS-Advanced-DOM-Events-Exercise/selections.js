function create(words) {
    const iniDiv = document.getElementById('content');
    
    function onClick(ev) {
       if (ev.target.children[0].style.display == 'none') {
          ev.target.children[0].style.display = 'block';
       }
    }
 
    for (let word of words) {
       let div = document.createElement('div');
       let text = document.createElement('p');
       text.innerHTML = word;
       div.appendChild(text);
       iniDiv.appendChild(div);
       div.addEventListener('click', onClick);
       text.style.display = "none";
    }
}