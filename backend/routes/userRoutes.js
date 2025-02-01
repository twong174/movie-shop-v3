const express = require("express");
const { registerUser, getUser } = require('../controllers/userController');

const router = express.Router();

router.post("/registerUser", registerUser);
router.get("/getUser", getUser);

module.exports = router;
