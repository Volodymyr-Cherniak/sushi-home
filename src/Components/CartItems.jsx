import React from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {clearCart, decrementCount, deleteItem, incrementCount, pageItemById} from "../redux/actions";
import {Link} from "react-router-dom";

const CartItems = (props) => {

  const incrementCount = (args) => {
    props.incrementCount(args);
  }

  const decrementCount = (args) => {
    props.decrementCount(args);
  }

  const deleteItem = (args) => {
    props.deleteItem(args)
  }

  const clearCart = () => {
    props.clearCart()
  }

  const openItemPage = (id) => {
    props.pageItemById(id)
  }

  const sumAllItems = props.itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);

  if (!props.itemsInCart[0]) {
    return (
      <div className='mt-3'>
        <h5>Cart is empty</h5>
        <Link to={`/sushi-home`} >
          <button className='btn btn-outline-warning mt-2'>Back home page</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {
        props.itemsInCart.map(el =>
          <CartItem key={el.name}
                    itemInCart={el}
                    incrementCount={incrementCount}
                    decrementCount={decrementCount}
                    deleteItem={deleteItem}
                    openItemPage={openItemPage}
          />
        )
      }
      <div className='d-flex justify-content-between'>
        <button className='btn btn-outline-warning' onClick={clearCart}>Clear cart</button>
        <button className='btn btn-outline-success'>make an order for {sumAllItems + ' '}₴</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  itemsInCart: state.inCart
});

const mapDispatchToProps = dispatch => ({
  incrementCount: (args) => dispatch(incrementCount(args)),
  decrementCount: (args) => dispatch(decrementCount(args)),
  deleteItem: (args) => dispatch(deleteItem(args)),
  clearCart: () => dispatch(clearCart()),
  pageItemById: (id) => dispatch(pageItemById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
