import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const NavBar = (props) => {
  const totalItems = props.itemsInBasket.length;
  const sumAllItems = props.itemsInBasket.reduce((acc, curr) => acc + curr.sum, 0);

  return (
    <nav className="navbar navbar-expand navbar-light mainColor rounded-lg p-3 rounded">
      <div className="navbar-nav sticky-top">
        <Link to="/sushi-home" className="navbar-brand">Sushi-Home</Link>
        <Link to='/sushi-home' className="nav-item nav-link">Суші</Link>
        <Link to="/contacts" className="nav-item nav-link">Контакти</Link>
        {!totalItems && <Link to='/basket' className="nav-item nav-link">Корзинка</Link>}
        {totalItems > 0 && <Link to='/basket'
                                 type="button"
                                 className="btn btn-outline-success"
        >
          {totalItems}
          <i className='fab fa-opencart mr-3 ml-3'/>
          {sumAllItems + 'грн'}
        </Link>
        }
      </div>

    </nav>
  )
}

const mapStateToProps = state => ({
  itemsInBasket: state.inBasket
})

export default connect(mapStateToProps)(NavBar);
