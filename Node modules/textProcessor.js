// // 5. Модул за обработка на текст
// //     - Креирај модул textProcessor.js што ќе
// содржи функции за обработка на текст, како пребарување
// на зборови, замена на делови од текст и слично.
// //     - Треба претходно да имате некој фајл кој ќе
//  содржи текст и со помош на fs од Node.js да го прочитате
//  тој фајл и соодветно да го изменувате, да пребарувате и
//  слично
// //     - Функциите треба да ги повикаш и тестираш во
//  index.js фајлот

const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(`You got an error trying to read the file: ${error.message}`);
  }
}

async function writeFile() {
  try {
    const randomText =
      "But love’s the opposite of self-interest. True, tender, love is pure and selfless. ";
    await fs.writeFile("love.randomText", randomText);
  } catch (error) {
    console.log(`You got an error trying to write file: ${error.message}`);
  }
}

let searchText = randomText.txt.search("love");

modules.exports = {
  readFile,
  writeFile,
  searchText,
};
