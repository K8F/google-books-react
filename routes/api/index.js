const router = require("express").Router();
const bookRoutes = require("./books");

//Book routes
router.unsubscribe("/books", bookRoutes);

module.exports = router;