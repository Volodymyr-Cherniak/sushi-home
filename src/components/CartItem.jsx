import React from "react";
import {Link} from "react-router-dom";
import {get} from 'lodash';

const CartItem = (props) => {
  const { decrementCount, incrementCount, deleteItem, openItemPage } = props;

  const itemInCart = get(props, 'itemInCart', {});
  const locals = get(props, 'locals', {});
  const img = get(itemInCart, 'img', '');
  const name = get(itemInCart, 'name', '');
  const count = get(itemInCart, 'count', 0);
  const sum = get(itemInCart, 'sum', 0);
  const currency = get(itemInCart, 'currency', '');
  const id = get(itemInCart, 'id', 0);


  return (
    <div className="card mb-3 mt-2">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <Link to={`/item/${id}`} onClick={() => openItemPage(id)}>
              <img src={img} alt="" style={{maxHeight: '5rem'}}/>
            </Link>
          </div>

          <div className="col text-center">
            <h5>{name}</h5>
          </div>

          <div className="col-5 text-end">
            <button className='btn btn-outline-secondary ml-auto btn-sm'
                    onClick={() => decrementCount(itemInCart)}>-
            </button>

            <span className=' ml-2 mr-2'><strong>{count}</strong></span>

            <button className='btn btn-outline-secondary mr-auto btn-sm'
                    onClick={() => incrementCount(itemInCart)}>+
            </button>

            <span className=' ml-1 mr-1'><strong>{sum + ' '}{currency}</strong></span>
            <button className='btn btn-outline-danger ' onClick={() => deleteItem(itemInCart)}>{locals.buttons.remove}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
