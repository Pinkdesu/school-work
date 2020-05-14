const express = require("express");
const { knex2: db } = require("../database/index");
const router = express.Router();

router.get("/texts", (request, response) => {
  db("text")
    .select()
    .then((texts) =>
      db("question")
        .select()
        .then((questions) =>
          db("answer")
            .select()
            .then((answers) => {
              const result = [];

              for (let i = 0; i < texts.length; i++) {
                const { id, name } = texts[i];
                const text = { id, name, questions: [] };

                for (let j = 0; j < questions.length; j++) {
                  const {
                    id: questionId,
                    value: questionValue,
                    id_text,
                  } = questions[j];

                  if (id === id_text) {
                    const question = { questionId, questionValue, answers: [] };

                    for (let l = 0; l < answers.length; l++) {
                      const {
                        id: answerId,
                        value: answerValue,
                        is_correct: isCorrect,
                        id_question,
                      } = answers[l];

                      if (questionId === id_question) {
                        const answer = { answerId, answerValue, isCorrect };
                        question.answers.push(answer);
                      }
                    }

                    text.questions.push(question);
                  }
                }

                result.push(text);
              }
              result.sort((text1, text2) => text1.id - text2.id);
              response.send(result);
            })
        )
    )
    .catch((error) => response.send(error));
});

router.post("/texts", (request, response) => {
  const data = request.body;

  db("text")
    .insert({ name: data.name })
    .then(() =>
      db("text")
        .max({ id: "text.id" })
        .then((row) => {
          const { questions } = data;
          questions.forEach(async (question) => {
            const { text: questionText, answers } = question;
            await db("question").insert({
              value: questionText,
              id_text: +row[0].id,
            });
            const questionId = await db("question").max({ id: "question.id" });

            for (let i = 0; i < answers.length; i++) {
              const { text: answerText, isCorrect } = answers[i];

              await db("answer").insert({
                value: answerText,
                is_correct: isCorrect,
                id_question: +questionId[0].id,
              });
            }
          });
        })
    )
    .catch((error) => response.send(error));
});

// const testAsync = async (textId, questions) => {
//   questions.forEach(async question => {

//     const { text: questionText, answers } = question;
//     await db("question").insert({value: questionText, id_text: textId })
//     const questionId = db("question").max("id")

//   });
// }

module.exports = router;
