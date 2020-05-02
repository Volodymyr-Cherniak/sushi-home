import React from "react";

const BasketItem = (props) => {
  const {itemInBasket, decrementCount, incrementCount, deleteItem} = props;
  const {img, name, count, sum, currency} = itemInBasket;

  console.log('itemInBasket', itemInBasket)

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
            <button className='btn btn-outline-secondary ml-auto' onClick={() => decrementCount(itemInBasket)}>-</button>
            <span className=' ml-2 mr-2'><strong>{count}</strong></span>
            <button className='btn btn-outline-secondary mr-auto' onClick={() => incrementCount(itemInBasket)}>+</button>
            <span className=' ml-1 mr-1'><strong>{sum}{currency}</strong></span>
            <button className='btn btn-outline-danger ' onClick={() => deleteItem(itemInBasket)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
