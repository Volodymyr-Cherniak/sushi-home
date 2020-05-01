import React from "react"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light mainColor rounded-lg p-3 rounded">
      <a className="navbar-brand" href="/sushi-home">Sushi-Home</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/sushi-home">Суші<span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/contacts">Контакти</a>
          <a className="nav-item nav-link" href="/basket">Корзинка</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
