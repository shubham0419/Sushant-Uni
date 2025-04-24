const express = require("express");
const User = require("../model/user.model");
const { getUser, updateUser } = require("../controller/user.controller");
const router = express.Router();

router.get("/:id",getUser);
router.put("/:id",updateUser);

module.exports = router;