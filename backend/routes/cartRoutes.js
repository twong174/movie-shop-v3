const express = require("express");
const {getCart, addToCart} = require("../controllers/cartControllers");

const router = express.Router();

router.get("/getCart", getCart);
router.post("/addToCart", addToCart);

module.exports = router;