// import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./UploadImage.css";
// import SelectAutoWidth from "./SelectAutoWidth";

const UploadImage = () => {

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
        {/* <SelectAutoWidth /> */}
        <input type="submit"/>
      </form>
    </div>
    
  )
}
export default UploadImage;
