import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import "./Sidebar.css"
import UploadImage from './UploadImage';
import SortingRadio from './SortingRadio';

export default function Sidebar({ numImageAdded, setNumImageAdded, images, setImages }) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider /> */}
        
        </Box>
        
  );

  return (
    <div className="Sidebar">
        <React.Fragment key="left">
            <Button onClick={toggleDrawer("left", true)}>menu</Button>
            <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                // hideBackdrop = "true"
                sx ={{ zIndex: 'modal' }}
            >
              {list("left")}
              <SortingRadio images={images} setImages={setImages} />
              <UploadImage
                numImageAdded={numImageAdded}
                setNumImageAdded={setNumImageAdded}
              />    
            </Drawer>
            
        </React.Fragment>
    </div>
  );
}
