const express = require("express");
const router = express.Router();
const {validateToken,isAdmin} = require("../middlewares/authMiddleware")
const imageUpload = require("../helpers/file-upload")
const multer = require("multer");
const docController = require("../controllers/doc.controller");

//all data GET 
router.get("/", isAdmin,docController.getAll);

// single GET 
router.get("/:documentId", isAdmin, docController.getSingle);

// document create POST
router.post("/create", validateToken, imageUpload.upload, docController.postCreate)

// check ucin edit GET 
router.get("/edit/:documentId", isAdmin, docController.getEdit);

// check ucin edit POST 
router.post("/edit/:documentId", isAdmin, imageUpload.upload, docController.postEdit);

// delete POST 
router.delete("/delete/:documentId", isAdmin, docController.destroy);

module.exports = router;