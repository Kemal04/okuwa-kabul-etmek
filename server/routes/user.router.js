const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/authMiddleware");
const userController = require("../controllers/user.controller");


//all data GET 
router.get("/", userController.getAlldata);

// single GET 
router.get("/:userId", userController.getSingleUser);

// USER edit GET and POST 
router.get("/edit/:userId", validateToken, userController.getEdit);

// USER edit POST
router.post("/edit/:userId", validateToken, userController.postEdit);

module.exports = router;