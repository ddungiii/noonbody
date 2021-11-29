import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./BodyImages.css"
// import fs from 'fs';
// var fs = require('fs');


const BobyImages = () => {
  const [addPose, setAddPose] = useState("");
  const [addDate, setAddDate] = useState("");
  // const [addImage, setAddImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/images')
    .then(response => {
      setImages(response.data);
    });
  }, []);

  const onUploadClick = () => {
    axios.post('/api/images', {
      pose: addPose,
      date: addDate
      // img: {
      //   data: fs.readFileSync(addImage, 'utf-8'),
      //   contentType: 'image/jpeg'
      // }
    }).then(() => axios.get('/api/images'))
    .then(response => {
      setImages(response.data);
      setAddPose("");
      setAddDate("");
      // setAddImage();
    });
  };

  return (
    <div className="upload">
      <label for="upload" >Upload Image</label><br />
      1. pose : <input type="text" id="upload" value={addPose} onChange={v => setAddPose(v.target.value)} /><br />
      2. date : <input type="date" id="upload" value={addDate} onChange={v => setAddDate(v.target.value)} /><br />
      {/* 3. file : <input type="file" id="upload" value={addImage} onChange={v => setAddImage(v.target.value)} accept="image/*" /><br /> */}
          
      <button onClick={() => onUploadClick()}>UPLOAD</button>
      {images.map(image =>
        image.pose
      )}
    </div>
  )
}
export default BobyImages;
