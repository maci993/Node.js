//2. Модул за конверзија на валути
//  - Напиши модул currencyConverter.js
// кој ќе претвора вредности од една
//валута во друга во согласност со
//тековниот валутен курс.
//- Функциите треба да ги повикаш
//и тестираш во index.js фајлот

//  function convertCurr(amount, fromCurr, toCurr) {
//      const exchangeRate = getExchangeRate(fromCurr, toCurr);
//      const convertedAmount = exchangeRate * amount;
//     return convertedAmount;
//  }

// function getExchangeRate(fromCurr, toCurr) {
//     const exchangeRates = {
//         USD: 1,
//         EUR: 0.91,
//     };
//     return exchangeRates[toCurr] / exchangeRates[fromCurr];
// }

const CC = require("currency-converter-lt");

let currencyConverter = new CC();
let ratesCache = {
  isRatesCaching: true,
  ratesCacheDuration: 3600,
};
currencyConverter = currencyConverter.setupRatesCache(ratesCache);

modules.exports = {
  currencyConverter,
};
