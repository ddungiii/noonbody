import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import BodyImages from "./component/BodyImages";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        NOONBODY
      </header>
      <body>
        <BrowserRouter>
          <Sidebar className="sidebar"></Sidebar>
          <Routes>
            <Route exact path="/" element={<BodyImages />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
