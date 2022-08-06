"use strict";

var express = require("express");

var router = express.Router();
/* GET users listing. */

router.get("/", function (req, res, next) {
  var dataArray = [{
    name: "Teste",
    number: "999653668"
  }, {
    name: "Teste-2",
    number: "999653668"
  }, {
    name: "Teste-3",
    number: "999653668"
  }];
  res.json({
    data: dataArray
  });
});
module.exports = router;