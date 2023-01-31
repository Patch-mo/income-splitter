const InputElement = document.getElementById('inputNumber');
const buttonElement = document.getElementById('calcBtn');
const taxElement = document.getElementById('resultTax');
const saveElement = document.getElementById('resultSave');
const payElement = document.getElementById('resultPay');
const keepElement = document.getElementById('resultKeep');

const calculator = () => {
    let income = InputElement.value;
    let tax = income * (20 / 100);
    taxElement.textContent = `Save £${tax} for income tax`;
    let save = income * (20 / 100);
    saveElement.textContent = `Save £${save} in a savings account for the future`;
    let pay = income * (20 / 100);
    payElement.textContent = `Pay yourself £${pay}`;
    let keep = income * (40 / 100);
    keepElement.textContent = `Keep £${keep} in your business account`;
};

buttonElement.addEventListener('click', calculator);

if (!buttonElement) {
    console.error('button element not found');
}
