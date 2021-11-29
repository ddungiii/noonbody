const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
// var multer = require('multer');
// const { createBrotliCompress } = require("zlib");
const imageRouter = require('./routes/imageRouter');

const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/noonbody", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.once('open', () => {
  console.log("DB connected!");
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

////////
// app.set("view engine", "ejs");

// var storage = multer.diskStorage({
//   destination: (req, file, db) => {
//     createBrotliCompress(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.filename + '-' + Date.now())
//   }
// });

// var upload = multer({ storage: storage });

// app.get('/', (req, res) => {
//   ImageModel.find({}, (err, items) => {
//       if (err) {
//           console.log(err);
//           res.status(500).send('An error occurred', err);
//       }
//       else {
//           res.render('imagesPage', { items: items });
//       }
//   });
// });

// app.post('/', upload.single('image'), (req, res, next) => {
  
//   var obj = {
//       name: req.body.name,
//       desc: req.body.desc,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           // data: fs.readFileSync(path.join('/uploads/' + req.file.filename)),
//           contentType: 'image/jpeg'
//       }
//   }
//   ImageModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {       
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });

app.use("/images", imageRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}`);
});

