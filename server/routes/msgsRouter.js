const express = require("express");
const Router = express.Router();
const Messages = require("../models/Messages");

Router.route("/:userId").get((req, res, next) => {
  const userId = req.params.userId
  console.log(userId);
  Messages.findOne({ userId: userId }, (err, Msgs) => {
    if (err) return next(err);
    if (!Msgs) {
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.json({
        success: true,
        message: "You have not sent any message",
        messages: []
      });
      return;
    }
    res.setHeader("content-type", "application/json");
    res.statusCode = 200;
    res.json({
      success: true,
      message: "You have not sent any message",
      messages: Msgs.messages
    });
    return;
  });
});

module.exports = Router;
