function encodeAndDecodeMessages() {
    const cleanText = document.getElementsByTagName('textarea')[0];
    const encodeText = document.getElementsByTagName('textarea')[1];
    
    const encodeBtn = document.getElementsByTagName('button')[0].addEventListener('click', onClickEncode);
    const decodeBtn = document.getElementsByTagName('button')[1].addEventListener('click', onClickDecode);

    let text = '';

    function onClickEncode() {
        for (let i = 0; i < cleanText.value.length; i++) {
            text += String.fromCharCode(Number(cleanText.value.charCodeAt(i) + 1));
            
        }
        document.getElementsByTagName('textarea')[0].value = '';
        document.getElementsByTagName('textarea')[1].value = text;
        text = '';
    }

    function onClickDecode() {
        for (let i = 0; i < encodeText.value.length; i++) {
            text += String.fromCharCode(Number(encodeText.value.charCodeAt(i) - 1));
            
        }
        document.getElementsByTagName('textarea')[1].value = text;
        text = '';
    }
}