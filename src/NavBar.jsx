import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const NavBar = (props) => {
  const totalItems = props.itemsInCart.length;
  const sumAllItems = props.itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);

  return (
    <nav className="navbar navbar-expand navbar-light mainColor rounded-lg p-3 rounded">
      <div className="navbar-nav sticky-top">
        <Link to="/" className="navbar-brand">Sushi-Home</Link>

        <Link to='/' className="nav-item nav-link">Sushi</Link>

        <Link to="/contacts" className="nav-item nav-link">Contact</Link>

        {!totalItems && <Link to='/cart' className="nav-item nav-link">Cart</Link>}
        {totalItems > 0 && <Link to='/cart'
                                 className="nav-item nav-link"
        >
          {'Cart '} <strong>{sumAllItems+' '}₴</strong>
        </Link>
        }
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  itemsInCart: state.inCart
})

export default connect(mapStateToProps)(NavBar);
