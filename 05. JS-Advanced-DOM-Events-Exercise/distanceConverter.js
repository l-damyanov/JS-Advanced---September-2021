function attachEventsListeners() {
    const inputDistance = document.querySelector('#inputDistance');
    const inputUnits = document.querySelector('#inputUnits');
    const outputDistance = document.querySelector('#outputDistance');
    const outputUnits = document.querySelector('#outputUnits');
    const convertBtn = document.querySelector('#convert')

    let conversionValues = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    
    convertBtn.addEventListener('click', onClick);

    function onClick() {
        let convertFromValue = inputUnits.value;
        let convertToValue = outputUnits.value;

        let valueInMetres = inputDistance.value * conversionValues[convertFromValue];
        let convertedValue = valueInMetres / conversionValues[convertToValue];
        outputDistance.value = convertedValue;
    }
}