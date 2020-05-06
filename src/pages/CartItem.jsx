import React from "react";

const CartItem = (props) => {
  const {itemInCart, decrementCount, incrementCount, deleteItem} = props;
  const {img, name, count, sum, currency} = itemInCart;

  console.log('itemInCart', itemInCart)

  return (
    <div className="card mb-3 mt-2">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col" >
            <img src={img} alt="" style={{maxHeight: '5rem'}}/>
          </div>
          <div className="col text-center">
            <h5>{name}</h5>
          </div>
          <div className="col text-center">
            <button className='btn btn-outline-secondary ml-auto btn-sm' onClick={() => decrementCount(itemInCart)}>-</button>
            <span className=' ml-2 mr-2'><strong>{count}</strong></span>
            <button className='btn btn-outline-secondary mr-auto btn-sm' onClick={() => incrementCount(itemInCart)}>+</button>
            <span className=' ml-1 mr-1'><strong>{sum}{currency}</strong></span>
            <button className='btn btn-outline-danger ' onClick={() => deleteItem(itemInCart)}>Видалити</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
