import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeLanguage} from "../redux/actions";


const NavBar = (props) => {
  const totalItems = props.itemsInCart.length;
  const sumAllItems = props.itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);
  const {locals, boolean, changeLanguage} = props;

  const changeLanguage1 = () => {
    changeLanguage(boolean)
  }

  return (
    <nav className="navbar navbar-expand navbar-light nav mb-3">
      <Link to="/" className="navbar-brand">{locals.navbar.logo}</Link>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' className=" nav-link">{locals.navbar.menuItems}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className=" nav-link">{locals.navbar.contact}</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className=" nav-link">{locals.navbar.cart}</Link>
          </li>
        </ul>
        {totalItems > 0 &&
        <Link to='/cart'>
          <button className="btn btn-outline-success mr-1">
            {locals.navbar.cart + ' '} <strong>{sumAllItems + ' '}₴</strong>
          </button>
        </Link>
        }

        <button className="btn btn-outline-success" onClick={changeLanguage1}>{locals.buttons.language}</button>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  itemsInCart: state.inCart,
  locals: state.localization,
  boolean: state.english,
})
const mapDispatchToProps = dispatch => ({
  changeLanguage: (boolean) => dispatch(changeLanguage(boolean)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
