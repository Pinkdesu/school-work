const express = require("express");
const db = require("../database");
const router = express.Router();

router.post("/applications", function(request, response) {
  //response.send(days[dayNumber]);
  //  let n = request.params["number"];
  const data = request.body;
  db("client")
    .insert({ name: data.name, phone: data.phone })
    .then(() => {
      db.select()
        .from("client")
        .then(clients => response.send(clients));
    });
});

module.exports = router;
