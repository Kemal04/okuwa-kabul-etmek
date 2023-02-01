const express = require("express");
const router = express.Router();
const {userDoc} = require("../models/model")

//all data GET 
router.get("/",  async (req, res) => {
    const userDocs = await userDoc.findAll();
    res.json({
        userDocs: userDocs
    })
});


// single GET 
router.get("/:docId", async (req, res) => {
    const id = req.params.docId
    try {
        const userDoc = await userDoc.findByPk(id);
        if (userDoc) {
            return res.json({
                userDoc: userDoc
            });
        }
    }
    catch (err) {
        console.log(err)
    }

});

module.exports = router;