import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import BodyImages from "./component/BodyImages";
import Album from "./album";

import CssBaseline from '@mui/material/CssBaseline';



function App() {
  return (
    <div className="App">
      <CssBaseline />
      <body>
        <BrowserRouter>
          {/* <Sidebar className="sidebar"></Sidebar> */}
          <Routes>
            <Route exact path="/" element={<BodyImages />} />
            <Route exact path="/test" element={<Album />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
