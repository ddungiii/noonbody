import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./BodyImages.css"
// import fs from 'fs';
// var fs = require('fs');


const BobyImages = () => {
  // const [addPose, setAddPose] = useState("");
  // const [addDate, setAddDate] = useState("");
  const [addImage, setAddImage] = useState();
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    axios.get('/api/images')
    .then(response => {
      console.log(response)
      setImages(response.data);
    });
  }, []);

  const onUploadSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("pose", event.target[0].value);
    formData.append("date", event.target[1].value);
    formData.append("bodyImage", event.target[2].files[0]);
    axios.post('/api/images', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log({ response });
      document.getElementById("upload").reset();
    })
  }

  return (
    <div className="upload" >
      <form onSubmit={onUploadSubmit} id="upload">
        <label>Upload Image</label><br />
        1. pose : <input type="text" name="pose" /><br />
        2. date : <input type="date" name="date" /><br />
        3. file : <input type="file" name="bodyImage" maxsize="1200"accept="image/*" /><br />
              
        <input type="submit"/>
      </form>
      <div className="img-list">
        {images.length !== 0 &&
          images.map((image) =>
          // const base64String = btoa(String.fromCharCode(...new Uint8Array(image.img.data)));
          <img src={`data:image/jpeg;base64,${Buffer.from((image.img.data.data)).toString('base64')}`} alt="이미지" />
          // <img src={require(image.img.data).default} alt="body image "/>
          // <div>{image.pose}</div>
        )}
      </div>
    </div>
    
  )
}
export default BobyImages;
