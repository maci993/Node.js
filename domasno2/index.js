const { convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres
 } 
= require("./conversion.js")

const distance =  50
console.log(distance, "miles is equal to", convertMilesToKm(50), "kilometers.");

const temperature = 20
console.log(temperature, "Celsius is equal to", convertCelsiusToFahrenheit(20), "Fahrenheit.");

const weight = 45
console.log(weight, "pounds is equal to", convertPoundsToKilogram(45), "kilograms.");

const lenght = 30
console.log(lenght, "feets is equal to", convertFeetToMetres(30), "metres.");

