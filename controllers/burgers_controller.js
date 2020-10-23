const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = { id: req.params.id };

    burger.updateOne({ devoured: true }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

// Export routes for server.js to use.
module.exports = router;