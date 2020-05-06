import React from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {clearCart, decrementCount, deleteItem, incrementCount} from "../redux/actions";
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

  const sumAllItems = props.itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);

  if (!props.itemsInCart[0]) {
    return (
      <div className='mt-3'>
        <h5>Корзина поки пуста</h5>
        <Link to={`/sushi-home`} >
          <button className='btn btn-outline-warning mt-2'>на головну</button>
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
          />
        )
      }
      <div className='d-flex justify-content-between'>
        <button className='btn btn-outline-warning' onClick={clearCart}>Очистити корзину</button>
        <button className='btn btn-outline-success'>Оформити Замовлення на {sumAllItems}грн</button>
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
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
