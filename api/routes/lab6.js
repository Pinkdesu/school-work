const express = require("express");
const { knex2 } = require("../database/index");
const db = knex2;
const router = express.Router();

router.get("/texts", (request, response) => {});

router.post("/texts", (request, response) => {});

module.exports = router;
