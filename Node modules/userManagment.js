// 3. Модул за управување со корисници
//     - Креирај модул userManagement.js со функции за
//     додавање, бришење и пребарување на корисници.
//     - Овде треба да се искористат методите кои ги
//     нудат низите т.е push за додавање, filter за бришење
//      и find за пребарување.
//     - Функциите треба да ги повикаш и тестираш во index.js
//      фајлот

let users = [
  {
    name: "Aria Harris",
    age: 25,
    city: "New York",
  },
  {
    name: "Jane Lewis",
    age: 30,
    city: "Houston",
  },
  {
    name: "Jameson Green",
    age: 31,
    city: "Dallas",
  },
  {
    name: "Cale Johnson",
    age: 28,
    city: "New York",
  },
  {
    name: "Reid Torres",
    age: 35,
    city: "Seattle",
  },
  {
    name: "Cameron Williams",
    age: 32,
    city: "New York",
  },
  {
    name: "Grace Jones",
    age: 30,
    city: "Denver",
  },
  {
    name: "Trinity Campbell",
    age: 38,
    city: "New York",
  },
];

///push
function pushUser() {
  users.push("name: 'James Robert', age: 30, city: 'Washington'");
  console.log(users);
}

////filter
let startsWithN = users.city.filter((city) => city.startsWith("N"));

//splice
let deleted = delete users[2];

modules.exports = {
  pushUser,
  startsWithN,
  deleted
};
