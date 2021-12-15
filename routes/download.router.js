const express = require("express");

const router = express.Router();

const cvsController = require("../controllers/csv.controller");

router.get("/", cvsController.download);

module.exports = router;
