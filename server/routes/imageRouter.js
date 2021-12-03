var express = require('express');
const db = require("../db");
var router = express.Router();
const multer = require("multer");
const path = require("path");
var fs = require("fs");
const ImageModel = require("../models/image");

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

router.get("/", (req, res) => {
  db.getAll((images) => {
    res.json(images);
  });
});

router.post("/", upload.single("bodyImage"), (req, res, next) => {
      const newImage = new ImageModel({
          pose: req.body.pose,
          date: req.body.date,
          img: {
              data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
              contentType: 'image/jpeg'
          }
        })

      db.add(newImage, (result) => {
        res.json(result);
      });
});


module.exports = router;
