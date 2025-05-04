const express = require("express");
const { allProducts, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const { isAdmin, isLoggedIn } = require("../middleware");
const router = express.Router();

router.get("/all",allProducts);

router.post("/create",isLoggedIn,isAdmin,createProduct);

router.post("/update/:id",isLoggedIn,isAdmin,updateProduct);

router.post("/delete/:id",isLoggedIn,isAdmin,deleteProduct);

module.exports = router;
