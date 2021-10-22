function solution() {
    const giftName = document.querySelector('input[type="text"]');
    const addGiftBtn = document.querySelector('button');
    addGiftBtn.addEventListener('click', addGift);

    const listOfGifts = document.querySelector('ul');
    const sendGiftsSection = document.querySelectorAll('ul')[1];
    const discardGiftsSection = document.querySelectorAll('ul')[2];

    function addGift(ev) {
        ev.preventDefault();
        let gift = document.createElement('li');
        gift.className = 'gift';
        gift.textContent = `${giftName.value}`;

        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send'

        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';

        gift.appendChild(sendBtn);
        gift.appendChild(discardBtn);

        listOfGifts.appendChild(gift);

        Array.from(listOfGifts.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(g => listOfGifts.appendChild(g));
        sendBtn.addEventListener('click', sendGift);
        discardBtn.addEventListener('click', discardGift);

        giftName.value = '';
    }

    function sendGift(ev) {
        let giftEl = ev.target.parentElement;
        giftEl.children[1].remove();
        giftEl.children[0].remove();
        sendGiftsSection.appendChild(giftEl);
    }

    function discardGift(ev) {
        let giftEl = ev.target.parentElement;
        giftEl.children[1].remove();
        giftEl.children[0].remove();
        discardGiftsSection.appendChild(giftEl);
    }
}