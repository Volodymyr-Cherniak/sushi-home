import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {get} from 'lodash';
import {changeLanguage} from "../redux/actions";


const NavBar = (props) => {
  const {changeLanguage} = props;

  const itemsInCart = get(props, 'itemsInCart', []);
  const locals = get(props, 'locals', {});
  const boolean = get(props, 'boolean', true);
  const currentItem = get(props, 'currentItem', {});

  const totalItems = itemsInCart.length;
  const sumAllItems = itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);

  const isActive = () => {
    if (Object.keys(currentItem).length) return false;
    else if (totalItems) return false;
    return true;
  }

  const changeLang = () => {
    changeLanguage(boolean)
  }

  return (
    <nav className="navbar navbar-expand rounded-bottom navbar-light nav mb-3">
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
            {locals.navbar.cart2 + ' '} <strong>{sumAllItems + ' '}₴</strong>
          </button>
        </Link>
        }

        {isActive() &&
        <button className="btn btn-outline-success" onClick={changeLang}>{locals.buttons.language}</button>}
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  itemsInCart: state.inCart,
  currentItem: state.currentItem,
  locals: state.localization,
  boolean: state.english,
})
const mapDispatchToProps = dispatch => ({
  changeLanguage: (boolean) => dispatch(changeLanguage(boolean)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
