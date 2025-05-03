const express = require("express");
const { allProducts, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const { isAdmin } = require("../middleware");
const router = express.Router();

router.get("/all",allProducts);

router.post("/create",isAdmin,createProduct);

router.post("/update/:id",isAdmin,updateProduct);

router.post("/delete/:id",isAdmin,deleteProduct);

module.exports = router;
