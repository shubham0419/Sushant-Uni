const express = require("express");
const { allProducts, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const router = express.Router();

router.get("/all",allProducts)

router.post("/create",createProduct);

router.post("/update/:id",updateProduct);

router.post("/delete/:id",deleteProduct);

module.exports = router;
