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

router.post("/services", function(request, response) {
  const data = request.body;

  db("service")
    .insert({ name: data.name, price: data.price })
    .catch(error => response.send(error));
});

router.get("/services", function(request, response) {
  db("service")
    .select()
    .orderBy("id")
    .then(clients => response.send(clients))
    .catch(error => response.send(error));
});

router.put("/services/:id", function(request, response) {
  const serviceId = request.params["id"];
  const data = request.body;

  db("service")
    .where("id", "=", serviceId)
    .update({ name: data.name, price: data.price })
    .catch(error => response.send(error));
});

router.delete("/services/:id", function(request, response) {
  const serviceId = request.params["id"];

  db("service")
    .where("id", "=", serviceId)
    .del()
    .catch(error => response.send(error));
});

router.post("/clients", function(request, response) {
  const data = request.body;

  db("client")
    .insert({ name: data.name, phone: data.phone })
    .catch(error => response.send(error));
});

router.get("/clients", function(request, response) {
  db("client")
    .select()
    .orderBy("id")
    .then(clients => response.send(clients))
    .catch(error => response.send(error));
});

router.put("/clients/:id", function(request, response) {
  const clientId = request.params["id"];
  const data = request.body;

  db("client")
    .where("id", "=", clientId)
    .update({ name: data.name, phone: data.phone })
    .catch(error => response.send(error));
});

router.delete("/clients/:id", function(request, response) {
  const clientId = request.params["id"];

  db("client")
    .where("id", "=", clientId)
    .del()
    .catch(error => response.send(error));
});

router.post("/applications", function(request, response) {
  const data = request.body;
  const date = new Date().toISOString("YYYY-MM-DD");

  db("application")
    .insert({ client_id: data.client_id, date: date })
    .then(() => {
      db("application")
        .max({ id: "id" })
        .then(row => {
          const values = data.services.map(service => ({
            id_application: row[0].id,
            id_service: service
          }));
          db("application").insert(values);
        });
    })
    .catch(error => response.send(error));
});

module.exports = router;
