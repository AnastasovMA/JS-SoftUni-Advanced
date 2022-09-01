function attachEventsListeners() {
    let allButtons = document.querySelectorAll('input[type="button"]');

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondElement = document.getElementById('seconds');

    let daysConvertButton = allButtons[0];
    let hoursElementButton = allButtons[1];
    let minutesElementButton = allButtons[2];
    let secondElementButton = allButtons[3];

    daysConvertButton.addEventListener('click', (e) => {
        hoursElement.value = Number(daysElement.value) * 24;
        minutesElement.value = Number(daysElement.value) * 1440;
        secondElement.value = Number(daysElement.value) * 86400;
    })
    hoursElementButton.addEventListener('click', (e) => {
        daysElement.value = Number(hoursElement.value) / 24;
        minutesElement.value = Number(hoursElement.value) * 60;
        secondElement.value = Number(hoursElement.value) * 3600;
    })
    minutesElementButton.addEventListener('click', (e) => {
        daysElement.value = Number(minutesElement.value) / 1440;
        hoursElement.value = Number(minutesElement.value) / 60;
        secondElement.value = Number(minutesElement.value) * 60;
    })
    secondElementButton.addEventListener('click', (e) => {
        minutesElement.value = Number(secondElement.value) / 60;
        hoursElement.value = Number(secondElement.value) / 3600;
        daysElement.value = Number(secondElement.value) / 86400;
    })
}