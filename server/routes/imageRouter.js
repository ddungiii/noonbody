var express = require('express');
const db = require("../db");
var router = express.Router();
const multer = require("multer");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   }
// });
// // .single() 해야해?
// var upload = multer({ storage: storage })

// GET images.
router.get("/", (req, res) => {
  db.getAll((images) => {
    res.json(images);
  });
});

// CREATE BOOK
router.post("/", (req, res) => {
  const image = req.body;
  db.add(image, (newImage) => {
    res.json(newImage);
  });
});



module.exports = router;
