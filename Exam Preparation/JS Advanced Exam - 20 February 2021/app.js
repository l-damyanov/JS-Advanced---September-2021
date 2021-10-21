function solve(){
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');

   const createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', createArticle);

    const postsSection = document.getElementsByTagName('section')[1];
    
    const archiveSection = document.getElementsByClassName('archive-section')[0].children[1];

    function createArticle(ev) {
        ev.preventDefault();

        let articleElement = document.createElement('article');
        articleElement.innerHTML = `
        <h1>${title.value}</h1>
        <p>Category:
            <strong>${category.value}</strong>
        </p>
        <p>Creator:
            <strong>${author.value}</strong>
        </p>
        <p>${content.value}</p>
        <div class="buttons">
            <button class="btn delete">Delete</button>
            <button class="btn archive">Archive</button>
        </div>`;

        postsSection.appendChild(articleElement);
        let deleteBtn = articleElement.getElementsByClassName('btn delete')[0];
        deleteBtn.addEventListener('click', deleteArticle);
        let archiveBtn = articleElement.getElementsByClassName('btn archive')[0];
        archiveBtn.addEventListener('click', archiveArticle);
        
    }

    function archiveArticle(ev) {
        let articleTitle = ev.target.parentElement.parentElement.children[0].textContent;
        let liEl = document.createElement('li');
        liEl.textContent = articleTitle;
        archiveSection.appendChild(liEl)
        Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => archiveSection.appendChild(li));
        ev.target.parentElement.parentElement.remove();

    }

    function deleteArticle(ev) {
        ev.target.parentElement.parentElement.remove();
    }
}
