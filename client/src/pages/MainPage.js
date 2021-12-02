import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

import './MainPage.css';
import UploadImage from '../component/UploadImage';
import moment from 'moment';
import { PrimarySearchAppBar } from '../component/SearchBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8d6e63',
    },
    secondary: {
      main: '#9c786c',
    },
  },
});

function getFormatDate(dt){
  const date = moment(dt);
  const dddd = date.format('dddd').slice(0, 3);
  return moment(dt).format('YYYY. MM. DD.') + `(${dddd})`;
}

export default function MainPage() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    axios.get('/api/images')
    .then(response => {
      console.log(response)
      setImages(response.data);
    });
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar />
      
      <UploadImage />
      <main>
        <Container sx={{ py: 8 }}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="p"
        >
          2019. 09. 14.
        </Typography>
          <Grid container spacing={4}>
            {images.length !== 0 &&
            images.map((image) => (
              <Grid item key={image._id} >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    //   pt: '56.25%',
                    }}
                    image={`data:image/jpeg;base64,${Buffer.from((image.img.data.data)).toString('base64')}`}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                      {getFormatDate(image.date)}<br/>
                      {image.pose}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">DELETE</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Images from Instagram @cbum.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}