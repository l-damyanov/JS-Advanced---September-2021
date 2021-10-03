function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked; 
        
        if (isActive) {
            const infoDiv = profile.querySelector('div');
            if (ev.target.textContent == 'Show more') {  
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                ev.target.textContent = 'Show more';
            }
        }
    }
}