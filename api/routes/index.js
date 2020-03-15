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

router.get("/number/:value", function(request, response) {
  const value = request.params["value"];
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

  response.send(answer);
});

router.get("/equation", function(request, response) {
  let a = +request.query.a;
  let b = +request.query.b;
  let c = +request.query.c;
  let answer = "";

  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant >= 0) {
    if (discriminant === 0) {
      let x = -b / (2 * a);
      answer = `x = ${x}, (D = 0)`;
    } else {
      let x1 = (-b + discriminant ** (1 / 2)) / (2 * a);
      let x2 = (-b - discriminant ** (1 / 2)) / (2 * a);
      answer = `x1 = ${x1}, x2 = ${x2}, (D > 0)`;
    }
  } else answer = "уравнение не имеет корней (D < 0)";

  response.send(answer);
});

router.get("/day", function(request, response) {
  let query = request.query["date"];
  let date = new Date(query);
  let dayNumber = date.getDay();
  let days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  response.send(days[dayNumber]);
});

module.exports = router;
