const express = require("express");
const db = require("../database/index");
const router = express.Router();

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
        .max({ id: "application.id" })
        .then(row => {
          const values = data.services.map(service => ({
            id_application: +row[0].id,
            id_service: +service
          }));

          db("services_for_application")
            .insert(values)
            .catch(error => response.send(error));
        });
    })
    .catch(error => response.send(error));
});

router.get("/applications", function(request, response) {
  db({
    clt: "client",
    app: "application"
  })
    .select({
      id: "app.id",
      date: "app.date",
      clientId: "clt.id"
    })
    .where("app.client_id", "=", db.ref("clt.id"))
    .orderBy("app.id")
    .then(applications => {
      db({ srv: "service", sfa: "services_for_application" })
        .select({
          applicationId: "sfa.id_application",
          serviceId: "srv.id"
        })
        .where("sfa.id_service", "=", db.ref("srv.id"))
        .orderBy("sfa.id_application")
        .then(result => {
          const data = applications.map(application => {
            const services = [];
            for (let i = 0; i < result.length; i++) {
              if (result[i].applicationId === application.id) {
                services.push(result[i].serviceId);
              }
            }
            return { ...application, services };
          });
          response.send(data);
        });
    })
    .catch(error => response.send(error));
});

router.put("/applications/:id", function(request, response) {
  const applicationId = request.params["id"];
  const data = request.body;

  db("application")
    .where("id", "=", applicationId)
    .update({ date: data.date, client_id: data.clientId })
    .catch(error => response.send(error));

  db("services_for_application")
    .where("id_application", "=", applicationId)
    .del()
    .then(() => {
      const values = data.services.map(service => ({
        id_application: +applicationId,
        id_service: +service
      }));

      db("services_for_application")
        .insert(values)
        .catch(error => response.send(error));
    })
    .catch(error => response.send(error));
});

router.delete("/applications/:id", function(request, response) {
  const applicationId = request.params["id"];

  db("application")
    .where("id", "=", +applicationId)
    .del()
    .catch(error => response.send(error));

  db("services_for_application")
    .where("id_application", "=", +applicationId)
    .del()
    .catch(error => response.send(error));
});

module.exports = router;
