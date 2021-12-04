import * as React from 'react';
import { useRef } from "react";
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import UploadImage from './UploadImage';
import useOutsideClick from './utils/useOutsideClick';
import "./BackDrop.css"

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <div className="backDropUpload"  >
      <Button onClick={handleToggle} variant="contained">UPLOAD</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <UploadImage />
      </Backdrop>
    </div>
  );
}
