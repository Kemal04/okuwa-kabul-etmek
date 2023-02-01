const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if (file.fieldname === "img") {
            cb(null, './public/uploads/img/');
        }
        else if (file.fieldname === "sahadatnama") {
            cb(null, './public/uploads/sahadatnama/');
        }
        else if (file.fieldname === "hasiyetnama") {
            cb(null, './public/uploads/hasiyetnama/');
        }
        else if (file.fieldname === "medSpravka") {
            cb(null, './public/uploads/medSpravka/');
        }
     },
        
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).fields([
    { name: 'img', maxCount: 1 }, 
    { name: 'sahadatnama', maxCount: 1 },
    { name: 'hasiyetnama', maxCount: 1 },
    { name: 'medSpravka', maxCount: 1 },
]);

module.exports.upload = upload;