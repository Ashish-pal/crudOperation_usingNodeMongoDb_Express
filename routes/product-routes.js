const express = require("express");
const Product = require("../model/Product");
const router = express.Router();
const productController = require("../controllers/product-controller");

// export const getProducts = 
router.get("/", productController.getProducts);

router.post('/', productController.addProduct);

router.get("/:id", productController.getProductbyID);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;