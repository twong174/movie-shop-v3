const express = require("express");
const { getMovie } = require("../controllers/movieController");

const router = express.Router();

router.get('/getMovie', getMovie);

module.exports = router;
