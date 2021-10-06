function validate() {
    const inputField = document.getElementById('email');
    const validMailPatter = /(^[a-z]+@[a-z]+.[a-z]+$)/;
    inputField.addEventListener('change', () => {
        if (!validMailPatter.test(inputField.value)) {
            inputField.classList.add("error");
        } else {
            inputField.classList.remove("error");
        }
    });
}