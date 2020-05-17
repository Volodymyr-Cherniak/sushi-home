import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import UseRoutes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {

  const routes = UseRoutes(true);

  return (
    <Router>
      <div className='container'>
        <NavBar/>

        {routes}
      </div>
    </Router>
  );
}

export default App;
