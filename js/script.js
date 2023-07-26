let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rateUSD = 4.07;
    let rateGBP = 5.18;
    let rateCHF = 4.55;

    switch (currency) {
        case "USD": 
        result = amount / rateUSD;
            break;
        case "GBP":
        result = amount / rateGBP;
            break;
        case "CHF":
        result = amount / rateCHF;
            break;
    };

    resultElement.textContent = `${amount} PLN wynosi ${result.toFixed(2)} ${currency} `;
});
