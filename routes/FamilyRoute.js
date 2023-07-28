const express = require("express");
const { createFamily, joinFamily } = require("../controllers/FamilyController");

const router = express.Router();

router.post("/signup", createFamily);
router.post("/join", joinFamily);

module.exports = router;
