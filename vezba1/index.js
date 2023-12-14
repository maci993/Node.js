console.log("Marina Stojanovic");
//map, filter, find, reduce

function calculate(operation, a, b) {
  if (operation == "+") return a + b;
  if (operation == "-") return a - b;
  if (operation == "-") return a - b;
  if (operation == "*") return a * b;
  if (operation == "/") return a / b;
}

calculate("+", 4, 5);

function calculate(operation, a, b) {
  switch (operation) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
      case"/":
      console.log(a / b);
      break;
      default:
        console.log("Error");
  }
}
