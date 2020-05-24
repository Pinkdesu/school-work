const express = require("express");
const rp = require("request-promise");
const router = express.Router();

router.get("/responce", (request, response) => {
  rp({
    method: "GET",
    uri: "http://www.mocky.io/v2/5c7db5e13100005a00375fda",
    json: true,
  })
    .then((data) => {
      data.result = data.result.split(" ").join("_");
      response.send(data);
    })
    .catch((error) => {
      response.send(error);
    });
});

module.exports = router;
