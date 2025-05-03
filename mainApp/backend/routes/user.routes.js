const express = require("express");
const User = require("../model/user.model");
const { getUser, updateUser, toggleWishlist, toggleCart } = require("../controller/user.controller");
const router = express.Router();

router.get("/:id",getUser);
router.put("/:id",updateUser);
router.get("/wishlist/:productId",toggleWishlist)
router.get("/cart/:productId",toggleCart)

module.exports = router;