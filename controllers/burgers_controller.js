var express = require("express");

var burgers = require("../models/burger.js");


var router = express.Router();
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burgers.all(function(burgerData) {
      res.render("index", { burger_data: burgerData });
    });
  });


router.post("/burgers/create", function(req, res) {

  burgers.create(req.body.burger_name, function(result) {

    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burgers.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});




// Export route for server.js.
module.exports = router;
