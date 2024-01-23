const {
  circleArea,
  areaRectangle,
  areaTriangle,
  currencyConverter,
  pushUser,
  startsWithN,
  formatedDate,
  readFile,
  writeFile,
  searchText,
} = require("./geometry.js", "./currencyConverter.js", "./userManagment.js", "./dateTime.js", "./textProcessor.js");

const fs = require("fs").promises;

//circle Area
let r, Area;
r = 5;
Area = circleArea(r);
console.log("The area of circle is: " + Area);

//Area of rectangle
let a = 5;
let b = 6;
console.log("The area of rectangle is: " + areaRectangle(a, b));

//Area of triangle ?????????
let base = 10;
let height = 4;
console.log("The area of triangle is: " + areaTriangle(base * height) / 2);

//Currency converter?????
// const amount = 10;
// const fromCurr = "USD";
// const toCurr = "EUR";

// const convertedAmount = convertCurr(amount, fromCurr, toCurr);
// console.log(convertedAmount);

/////
// currencyConverter.from("USD").to("GBP").amount(100).convert().then((response) => {
//   console.log(response)
// });

//user managment
// pushUser();
// console.log(startsWithN);

//console.log("Remaining elements: " + users);

//date and time

//console.log(formatedDate);

//text Processor

readFile("randomText.txt");
writeFile("randomText.txt");
