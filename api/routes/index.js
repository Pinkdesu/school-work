let express = require("express");
let router = express.Router();

const NUMBERS_ARRAY = [
  [
    "ноль",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать"
  ],
  [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто"
  ],
  [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот"
  ]
];

router.get("/number/:value", function(req, res, next) {
  const value = req.params["value"];
  const number = Math.abs(+value);
  const valueLength = +value >= 0 ? value.length : value.length - 1;
  let answer = +value >= 0 ? "" : "минус ";

  switch (valueLength) {
    case 1:
    case 2: {
      if (number < 20) answer += NUMBERS_ARRAY[0][number];
      else {
        let firstDigit = Math.trunc(number / 10);
        let secondDigit = number % 10;
        answer = NUMBERS_ARRAY[1][firstDigit];
        if (secondDigit !== 0) answer += " " + NUMBERS_ARRAY[0][secondDigit];
      }
      break;
    }
    case 3: {
      let firstDigit = Math.trunc(number / 100);
      let secondDigit = number % 100;
      answer += NUMBERS_ARRAY[2][firstDigit];

      if (secondDigit !== 0) {
        if (secondDigit < 20) answer += " " + NUMBERS_ARRAY[0][secondDigit];
        else {
          let digit1 = Math.trunc(secondDigit / 10);
          let digit2 = secondDigit % 10;
          answer += " " + NUMBERS_ARRAY[1][digit1];
          if (digit2 !== 0) answer += " " + NUMBERS_ARRAY[0][digit2];
        }
      }
      break;
    }
    default: {
      answer = "такие числа писать не умею";
      break;
    }
  }

  res.send(answer);
});

module.exports = router;
