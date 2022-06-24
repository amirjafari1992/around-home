const express = require("express");

const times = require("./data.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(times);
});

module.exports = router;
