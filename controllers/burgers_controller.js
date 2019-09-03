var express = require("express");

var burgers = require("../models/burger.js");


var router = express.Router();


router.get("/", function (req, res) {
    //Pass the burger data into the function
    burger.selectAll(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });



// Export routes for server.js to use.
module.exports = router;
