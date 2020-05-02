import React from "react";
import {connect} from "react-redux";
import BasketItem from "./BasketItem";
import {decrementCount, deleteItem, incrementCount} from "../redux/actions";

const BasketItems = (props) => {

  const incrementCount = (args) => {
    props.incrementCount(args);
  }

  const decrementCount = (args) => {
    props.decrementCount(args);
  }

  const deleteItem = (args) => {
    props.deleteItem(args)
  }

  const sumAllItems = props.itemsInBasket.reduce((acc, curr) => acc + curr.sum, 0);

  console.log('sumAllItems', sumAllItems)

  if (!props.itemsInBasket[0]) {
    return (
      <div className='mt-3'>
        <h5>Корзина поки пуста</h5>
      </div>
    )
  }

  return (
    <div>
      {
        props.itemsInBasket.map(el =>
          <BasketItem key={el.name}
                      itemInBasket={el}
                      incrementCount={incrementCount}
                      decrementCount={decrementCount}
                      deleteItem={deleteItem}
          />
        )
      }
      <div className='d-flex justify-content-end'>
        <button className='btn btn-outline-success'>Оформити Замовлення на {sumAllItems}грн</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  itemsInBasket: state.inBasket
});

const mapDispatchToProps = dispatch => ({
  incrementCount: (args) => dispatch(incrementCount(args)),
  decrementCount: (args) => dispatch(decrementCount(args)),
  deleteItem: (args) => dispatch(deleteItem(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItems);
