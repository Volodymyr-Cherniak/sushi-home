import React from "react"
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light mainColor rounded-lg p-3 rounded">
      <Link to="/sushi-home" className="navbar-brand">Sushi-Home</Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to='/sushi-home' className="nav-item nav-link active">Суші</Link>
          <Link to="/contacts" className="nav-item nav-link">Контакти</Link>
          <Link to='/basket' className="nav-item nav-link">Корзинка</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
