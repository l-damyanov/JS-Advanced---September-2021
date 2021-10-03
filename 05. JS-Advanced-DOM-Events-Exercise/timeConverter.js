function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onClickDays);
    document.getElementById('hoursBtn').addEventListener('click', onClickHours);
    document.getElementById('minutesBtn').addEventListener('click', onClickMinutes);
    document.getElementById('secondsBtn').addEventListener('click', onClickSeconds);

    function onClickDays() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 1440;
        secondsInput.value = daysInput.value * 86400;
    }

    function onClickHours() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = daysInput.value * 1440;
        secondsInput.value = daysInput.value * 86400;
    }

    function onClickMinutes() {
        daysInput.value = minutesInput.value / 1440;
        hoursInput.value = daysInput.value * 24;
        secondsInput.value = daysInput.value * 86400;
    }

    function onClickSeconds() {
        daysInput.value = secondsInput.value / 86400;
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 1440;
    }

}