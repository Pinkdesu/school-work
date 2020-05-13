const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: "6000",
    user: "postgres",
    password: "rtadmin",
    database: "lab2",
  },
});

const knex2 = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: "6000",
    user: "postgres",
    password: "rtadmin",
    database: "lab6",
  },
});

module.exports = { knex, knex2 };
