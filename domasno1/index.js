let numbers = [13, 40, 35, 64, 27, 52];
let oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers);

let numbers1 = [13, 40, 35, 64, 27, 52];
let sortNumbers = numbers1.sort((a, b) => a - b);
console.log(sortNumbers);


let numbers2 = [13, 40, 35, 64, 27, 52];
let sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


let numbers3 = [13, 40, 35, 64, 27, 52];
let findNumbers = numbers3.find(num => num < 33);
console.log(findNumbers);