import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./BodyImages.css"

const BobyImages = () => {
  const [addPose, setAddPose] = useState("");
  const [addDate, setAddDate] = useState("");
  const [addImage, setAddImage] = useState();
  const [images, setImages] = useState([]);

  useEffect(() =>{
    axios.get('/api/images')
    .then((response) => {
      setImages(response.data.messege)
    })
  }, [])

  const onSubmit = () => {
    axios.post(`/api/images`, {
      pose: addPose,
      date: addDate,
      img: {
        data: addImage,
        contentType: 'image/jpeg'
      }
    }).then(() => axios.get(`/api/images`))
    .then(response => {
      setImages(response.data);
      setAddPose("");
      setAddDate("");
      setAddImage();
    });
  };

  return (
    // <div className="upload">

      <form onSubmit={() => onSubmit()} method="post" class="uploadImage">
          <label for="image">Upload Image</label><br />
          1. pose : <input type="text" value={addPose} onChange={v => setAddPose(v.target.value)} ></input><br />
          2. date : <input type="date" value={addDate} onChange={v => setAddDate(v.target.value)}></input><br />
          3. file : <input type="file" value={addImage} onChange={v => setAddImage(v.target.value)} accept="image/png, image/jpeg" required></input><br />
          
          <input type="submit" value="UPLOAD" />
      </form>

    // </div>
  )
}

export default BobyImages;
