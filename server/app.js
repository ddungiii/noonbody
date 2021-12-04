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

app.use("/images", imageRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}`);
});

