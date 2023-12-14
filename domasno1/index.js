let numbers = [13, 40, 35, 64, 27, 52, 43, 12];
let oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers);


let sortNumbers = numbers.sort((a, b) => a - b);
console.log(sortNumbers);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

let findNumbers = numbers.find(num => num < 40 );
console.log(findNumbers);
