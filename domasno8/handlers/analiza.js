const fs = require("fs");

async function getAnaliza(req, res) {
  try {
    let output = await parseTemplate("analiza");
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error");
  }
};


async function postAnaliza(req, res) {
  const { analiza } = req.body;
  console.log(analiza.length);
  const textLength = analiza.length;
  const numOfWords = analiza.split(" ").length;
  const numOfSentences = analiza.split(/[.!?]/).length;
  const words = analiza.split(" ");
  let numOfWordsMoreThanFive = 0;
  let numOfWordsEqualToFive = 0;
  const regEx = /^[aeiouAEIOU]/;
  let wordsWithVowel = 0;
  for (words of words) {
    if (words.length > 5) {
      numOfWordsMoreThanFive++
    }
    if (words.length === 5) {
      numOfWordsEqualToFive++;
    }
    if (
      words.match(regEx)
    ) {
      wordsWithVowel++;
    }
  }

  try {
    let output = await parseTemplate("analiza", {
      brojNaKarakteri: textLength,
      povekjeOdPetKarakteri: numOfWordsMoreThanFive,
      ednakviNaPetKarakteri: numOfWordsEqualToFive,
      recenici: numOfSentences,
      zborovi: numOfWords,
      zboroviSoAEIOU: wordsWithVowel,
    });
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
  }

};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) {
          return reject(err);
        }
        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}`, data[d]);
          }
        }
        return resolve(content);
      }
    );
  });
};


module.exports = {
  getAnaliza,
  postAnaliza,
};
