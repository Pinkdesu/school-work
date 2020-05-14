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

router.post("/texts", (request, response) => {});

module.exports = router;
