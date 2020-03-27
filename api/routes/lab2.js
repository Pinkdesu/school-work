const express = require("express");
const db = require("../database/index");
const router = express.Router();

// router.get("/applications", function(request, response) {
//   response.send(days[dayNumber]);
//   let n = request.params["number"];
//   let data = {};
//   try {
//     let applications = db({ a: "application", c: "client" })
//       .select("a.id", "a.date", "c.id", "c.name")
//       .where("a.client_id" "=", "c.id")
//       .then(data => data);

//     console.dir(applications);
//   } catch (error) {
//     response.send(error);
//   }
// });
router.get("/services", function(request, response) {
  db("service")
    .select()
    .then(clients => response.send(clients))
    .catch(error => response.send(error));
});

router.get("/clients", function(request, response) {
  db("client")
    .select()
    .then(clients => response.send(clients))
    .catch(error => response.send(error));
});

router.post("/applications", function(request, response) {
  // const data = request.body;
  // db("client")
  //   .insert({ name: data.name, phone: data.phone })
  //   .then(() => {
  //     db("client")
  //       .select("client.id")
  //       .where("client.id", )
  //       .then(clients => response.send(clients));
  //   });
});

module.exports = router;
