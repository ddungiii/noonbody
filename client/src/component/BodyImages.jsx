// import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./BodyImages.css"
// import fs from 'fs';
// var fs = require('fs');


const BobyImages = () => {
  // const [addPose, setAddPose] = useState("");
  // const [addDate, setAddDate] = useState("");
  // const [addImage, setAddImage] = useState("");
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/images')
  //   .then(response => {
  //     setImages(response.data);
  //   });
  // }, []);

  // const onUploadSubmit = () => {
  //   axios.post('/api/images', {
  //     pose: addPose,
  //     date: addDate,
  //     img: {
  //       // data: fs.readFileSync(addImage, 'utf-8'),
  //       contentType: 'image/jpeg'
  //     // }
  //   }
  //   // .then(() => axios.get('/api/images'))
  //   // .then(response => {
  //   //   setImages(response.data);
  //   //   setAddPose("");
  //   //   setAddDate("");
  //     // setAddImage();
  //   });
  // };

  const onUploadSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("bodyImage", event.target[0].files[0]);
    axios.post('/api/images', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log({ response });
    })
  }

  return (
    <form onSubmit={onUploadSubmit} encType="multipart/form-data">
      <label>Upload Image</label><br />
      3. file : <input type="file" name="bodyImage" accept="image/*" /><br />
            
      <input type="submit"/>
    </form>
  )
}
export default BobyImages;
