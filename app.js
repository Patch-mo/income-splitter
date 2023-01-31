const earningsElement = document.getElementById('inputEarnings');
const earningsButtonElement = document.getElementById('calcEarningsBtn');
const taxElement = document.getElementById('resultTax');
const saveElement = document.getElementById('resultSave');
const payElement = document.getElementById('resultPay');
const keepElement = document.getElementById('resultKeep');

const costsCalculator = () => {
    let income = earningsElement.value;
    let tax = income * (20 / 100);
    taxElement.textContent = `Put £${tax} aside for income tax`;
    let save = income * (20 / 100);
    saveElement.textContent = `Save £${save} for the future`;
    let pay = income * (20 / 100);
    payElement.textContent = `Pay yourself £${pay}`;
    let keep = income * (40 / 100);
    keepElement.textContent = `Keep £${keep} in your business account for day to day business costs`;
};

earningsButtonElement.addEventListener('click', costsCalculator);
