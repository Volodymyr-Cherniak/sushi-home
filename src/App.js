import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import UseRoutes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {

  const routes = UseRoutes(true);

  return (
    <Router>
      <div className='container'>
        <NavBar/>
        {routes}
        <footer>
          <br/>
          All rights reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
