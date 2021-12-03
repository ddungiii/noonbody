import * as React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import {Button} from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Paper from '@mui/material/Paper';
import axios from "axios";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import "./UploadImage.css";

export default function SelectAutoWidth() {
  const [pose, setPose] = useState("");
  const [variant, setVariant] = useState("outlined");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState(null);

  const handleChange = (newValue) => {
    setDate(newValue);
  };


  const onUploadSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    const formData = new FormData();
    formData.append("pose", event.target[0].value);
    formData.append("date", event.target[2].value);
    formData.append("bodyImage", event.target[5].files[0]);
    axios.post('/api/images', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log({ response });
      // document.getElementById("upload").reset();
      setVariant("outlined");
    })
  }

  const onLoadFile = (e) => {
    const image = e.target.files[0];
    const url = URL.createObjectURL(image);
    setFile(url);
    setVariant("contained");
  }


  return (
    <div className="upload" >
      <Paper elevation={3} >
        <form onSubmit={onUploadSubmit} className="upload">
          
          <FormControl sx={{ m: 1, minWidth: 80, display: 'block', pb: 0.2}}>
            <Button
              variant={variant}
              component="label"
              onChange={onLoadFile}
            >
              Select File
              <input type="file" maxsize="1200" accept="image/*" hidden />
            </Button>
          </FormControl>

          <div className="img__box">
            { file !== null
              ? <img src={file} />
              : null
            }
          </div>
          
          <FormControl sx={{ m: 1, minWidth: 80}}>
            <InputLabel id="pose">Pose</InputLabel>
            <Select
              id="pose"
              labelId="pose"
              autoWidth
              label="Pose"
              name="pose"
            >
              <MenuItem value="Front Double Biceps">Front Double Biceps</MenuItem>
              <MenuItem value="Front Lat Spread">Front Double Biceps</MenuItem>
              <MenuItem value="Side Chest">Side Chest</MenuItem>
              <MenuItem value="Back Double Biceps">Back Double Biceps</MenuItem>
              <MenuItem value="Abdominals and Thighs">Abdominals and Thighs</MenuItem>
              <MenuItem value="Classic Pose">Classic Pose</MenuItem>
              <MenuItem value="etc">etc</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1 }}>
          <LocalizationProvider sx={{ m:1 }} dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              inputFormat={"yyyy. MM. dd"}
              mask={"____. __. __"}
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </FormControl>

          <Button
            sx={{ m: 1, width: 90, display: 'block'}}
            variant="contained"
            component="label"
          >
            UPLOAD
            <input type="submit" hidden />
          </Button>
          </form>
        </Paper>
    </div>
  );
}
