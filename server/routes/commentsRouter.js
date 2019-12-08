const express = require("express");
const Router = express.Router();
const comments = require("../models/Comments");

Router.route("/")
  .get((req, res, next) => {
    comments.find({}, (err, coms) => {
      if (err) return next(err);
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.json({
        mesage: "Comments fetched successfully",
        success: true,
        comments: coms
      });
    });
  })
  .post((req, res, next) => {
    console.log(req.body);
    comments.create(req.body, (err, com) => {
      if (err) return next(err);
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.json({
        message: "Comments Added successfully",
        success: true,
        comment: com
      });
    });
  });
module.exports = Router;
