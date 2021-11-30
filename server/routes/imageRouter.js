var express = require('express');
const db = require("../db");
var router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
  }
});

var upload = multer({ storage: storage });


// GET images.
router.get("/", (req, res) => {
  db.getAll((images) => {
    res.json(images);
  });
});

// CREATE BOOK
// router.post("/", (req, res) => {
//   const image = req.body;
//   db.add(image, (newImage) => {
//     res.json(newImage);
//   });
// });

// for multer
router.post("/", upload.single("bodyImage"), (req, res) => {
  res.json(req.file);
});

// router.post("/", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.json({ err });
//     }
//     return res.json(
//       req.file
//     );
//   });
// });



module.exports = router;
