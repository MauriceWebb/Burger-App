var express = require("express");

var router = express.Router();

// Import the model (sub.js) to use its database functions.
var sub = require("../models/sub.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sub.all(function(data) {
    var hbsObject = {
      subs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/subs", function(req, res) {
  sub.create(["sub_name", "devoured"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/subs/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
  let condition = `id ${req.params.id}`;

//   console.log("condition", condition);
  console.log(`condition ${condition}`);

  sub.update(
    {
      devoured: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
