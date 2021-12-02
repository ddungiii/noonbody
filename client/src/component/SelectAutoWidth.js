import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Pose</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Pose"
          name="pose"
        >
          <MenuItem value="Front Double Biceps">Front Double Biceps</MenuItem>
          <MenuItem value="Side Chest">Side Chest</MenuItem>
          <MenuItem value="Back Double Biceps">Back Double Biceps</MenuItem>
          <MenuItem value="Abdominals and Thighs">Abdominals and Thighs</MenuItem>
          <MenuItem value="Classic Pose">Classic Pose</MenuItem>
          <MenuItem value="etc">etc</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
