import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const NavBar = (props) => {
  const totalItems = props.itemsInCart.length;
  const sumAllItems = props.itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);


  return (
    <nav className="navbar navbar-expand navbar-light nav mb-3">
      <Link to="/" className="navbar-brand">Sushi-Home</Link>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' className=" nav-link">Sushi</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className=" nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className=" nav-link">Cart</Link>
          </li>
        </ul>
        {totalItems > 0 &&
        <Link to='/cart'>
          <button className="btn btn-outline-success">
            {'Cart '} <strong>{sumAllItems + ' '}₴</strong>
          </button>
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


/*
<div>
      <Navbar light expand="sm" className='nav mb-2'>
        <NavbarBrand>
          <Link to="/" className="navbar-brand">Sushi-Home</Link>
          <NavLink href="/" className="navbar-brand">Sushi-Home</NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/' className=" nav-link">Sushi</Link>
            </NavItem>

            <NavItem>
              <Link to="/contacts" className=" nav-link">Contact</Link>
            </NavItem>

            <NavItem>
              <Link to="/cart" className=" nav-link">Cart</Link>
            </NavItem>
          </Nav>

          {
            totalItems && <NavbarText>
            <Button outline color="success" >
              <Link to="/cart" size="sm">
                <strong>{sumAllItems + ' '}₴</strong>
              </Link>
            </Button>
          </NavbarText>
          }
        </Collapse>
      </Navbar>
    </div>




        <nav className="navbar navbar-expand-lg ">
          <Link to="/" className="navbar-brand">Sushi-Home</Link>

          <Link to='/' className=" nav-link">Sushi</Link>

          <Link to="/contacts" className=" nav-link">Contact</Link>

          {!totalItems && <Link to='/cart' className="nav-item nav-link">Cart</Link>}
          {totalItems > 0 && <Link to='/cart' className="nav-item nav-link">
            {'Cart '} <strong>{sumAllItems+' '}₴</strong>
          </Link>
          }
        </nav>
*/
