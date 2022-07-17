const express = require('express');
const router = express.Router();

var homeController = require("../controllers/homeController");
var searchController = require("../controllers/searchController");
var selectedBook = require("../controllers/selectedBook");

router.get('/',homeController.home)
router.get("/search", searchController.search)
router.get('/selected-book/:id', selectedBook.book);

module.exports = router;