//1. Обработка на низа
// - Напиши функција reverseArray која го
//инвертира редоследот на елементите во низа.
//пр. reverseArray([1, 2, 3, 4, 5]);
// Очекуван излез: [5, 4, 3, 2, 1]

let reverseArray = [1, 2, 3, 4, 5];
let sortedArray = reverseArray.sort((a, b) => b - a);
console.log(sortedArray);

//2. Обработка на Објекти
// - Да се напише функција countProperties која ќе
// прима објект како аргумент и ќе ги враќа бројот на
//неговите својства.
// пр.
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

//countProperties(car); // Очекуван излез: 3

let count = 0;
for (let key in car) {
  if (car.hasOwnProperty(key)) {
    count++;
  }
}

console.log("Number of keys: " + count);

//3. Комбинирање на Низи и Објекти
//- Напиши функција mergeArraysIntoObject
//која ќе прима два низи со клучеви и вредности и ќе
//ги комбинира во објект.
//пр.
// let keys = ['name', 'age', 'gender'];
// let values = ['Alice', 25, 'female'];

// mergeArraysIntoObject(keys, values);
// Очекуван излез: { name: 'Alice', age: 25, gender: 'female' }

let keys = ["name", "age", "gender"];
let values = ["Alice", 25, "female"];

const mergeArraysIntoObject = {};
keys.forEach((element, index) => {
  mergeArraysIntoObject[element] = values[index];
});

console.log(mergeArraysIntoObject);

//4. Филтрирање на Низи
// - Напиши функција filterByValueLength која ќе
//филтрира низа од стрингови според должината на
//нивните вредности.
//пр.
let words = ["apple", "orange", "banana", "kiwi", "strawberry"];

filterByValueLength = words.filter((element) => {
  return element.length > 5;
});
console.log(filterByValueLength);
// Очекуван излез: ['orange', 'banana', 'kiwi']

//5. Манипулација на Објекти
// - Напиши функција updateObjectProperty која прима
//објект, клуч и вредност и ја ажурира вредноста на
//соодветниот клуч во објектот.
//пр.
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

Object.keys(person).forEach((key) => {
  if (key === "age") {
    person[key] = 35;
  }
});
console.log(person);
// Очекуван излез: { name: 'John', age: 35, city: 'New York' }
