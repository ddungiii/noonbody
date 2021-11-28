import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import BodyImages from "./component/BodyImages"



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
            {/* <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/" component={Members} />
              <Route path="/" component={Cashes} />
            </Switch> */}
        </BrowserRouter>
        <BodyImages className="bodyImage"/>
      </body>
    </div>
  );
}

export default App;
