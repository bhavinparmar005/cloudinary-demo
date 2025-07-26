const express = require("express");
const controller = require("../controller/productController");

const router = express.Router();

router.get("/", controller.home);
router.post("/addproduct", controller.addProduct);

module.exports = router;
