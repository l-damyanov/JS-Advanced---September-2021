function solve() {
    const button = document.getElementById('searchBtn');
    button.addEventListener("click", onClick);

    function onClick() {
        let inputText = document.getElementById('searchField').value;

        let tableElements = Array.from(document.querySelectorAll('tbody tr'));

        tableElements.forEach((el) => {
            let text = el.textContent.toLowerCase();
            if (text.includes(inputText.toLowerCase())) {
                el.classList.add("select");
            } else {
                el.classList.remove("select");
            }
        })
    }
}