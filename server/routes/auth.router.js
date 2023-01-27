const express = require('express');
const router = express.Router();

const {validateToken} = require("../middlewares/authMiddleware")

const AuthController = require("../controllers/auth.controller")

router.post("/register", AuthController.registerPost) 
router.post("/login", AuthController.loginPost);
router.get("/auth", validateToken, AuthController.authGet);
router.get("/basicinfo/:id", AuthController.infoGet);

// Admin login

router.post("/rootman", AuthController.adminLogin);

module.exports = router;