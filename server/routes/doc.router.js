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

// delete POST 
router.delete("/delete/:documentId", isAdmin, docController.destroy);


module.exports = router;