function convertMilesToKm(miles) {
const km = miles * 1.6
return km
};

function convertCelsiusToFahrenheit(celsius) {
const fahrenheit = celsius * 9/5 + 32;
return fahrenheit;
};

function convertPoundsToKilogram(pounds) {
    const kilograms = pounds * 0.453592;
    return kilograms;
};

function convertFeetToMetres(feet) {
    const meters = feet * 3.281;
    return meters;
}



module.exports =  {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres
}