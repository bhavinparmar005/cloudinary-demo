const express = require("express");
const controller = require("../controller/productController");

const router = express.Router();
const { storage } = require("../config/storage");
const multer = require("multer");

const upload = multer({ storage });

router.get("/", controller.home);
router.post("/addproduct", upload.single("image"), controller.addProduct);

module.exports = router;
