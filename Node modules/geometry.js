//1. Модул за пресметување на површина на
//геометриска фигура
// - Креирај модул geometry.js што ќе содржи функции за
// пресметување на површината на различни геометриски
//  фигури (круг, правоаголник, троаголник).
//- Функциите треба да ги повикаш и тестираш во index.js
//фајлот

let pi = 3.14;
function circleArea(r) {
  return pi * r * r;
}

function areaRectangle(a, b) {
  let area = a * b;
  return area;
}

function areaTriangle(base, height) {
  let area = (base * height) / 2;
  return area;
}

module.exports = {
  circleArea,
  areaRectangle,
  areaTriangle,
};
