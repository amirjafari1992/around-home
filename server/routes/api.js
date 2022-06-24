const express = require("express");
const timesHandler = require("./times");

const router = express.Router();

router.use("/times", timesHandler);

module.exports = router;
