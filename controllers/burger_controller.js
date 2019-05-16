// import express and burger.js

var express = require("express");

var burger = require("../models/burger.js");
// router
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };


        res.render("index", hbsObject);
    })
});


router.post("/api/burgers", function (req, res) {
    console.log("hi");
    console.log(req.body);
    const burgerInfo = JSON.parse(JSON.stringify(req.body, null, 2));
    console.log(burgerInfo);
    burger.insertOne([burgerInfo.burgerName], function (result) {
        res.json({ id: result.insertID });
    });
});

router.post("/api/eatBurger", function (req, res) {


    burger.updateOne(req.body.burgerId, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();

        }

    });
});


router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.differentRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});










// exporting router
module.exports = router;