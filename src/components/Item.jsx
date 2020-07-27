import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {get} from 'lodash';

const Item = (props) => {
  const {openItemPage, addItemInCart} = props;

  const currentItem = get(props, 'currentItem', {});
  const name = get(props, 'currentItem.name', '');
  const img = get(props, 'currentItem.img', '');
  const text = get(props, 'currentItem.text', '');
  const price = get(props, 'currentItem.price', 0);
  const weight = get(props, 'currentItem.weight', '');
  const id = get(props, 'currentItem.id', 0);
  const currency = get(props, 'currentItem.currency', '');
  const inCart = get(props, 'inCart', []);
  const locals = get(props, 'locals', {});

  const ItemsInCart = inCart.find(el => el.id === id);

  const isItemsInCart = () => {
    if(ItemsInCart) {
      return <button className='btn btn-warning' onClick={() => addItemInCart(currentItem)}>{locals.buttons.inCart + ' ' + ItemsInCart.count}</button>
    }
    return <button className='btn btn-success' onClick={() => addItemInCart(currentItem)}>{locals.buttons.inCart}</button>
  }

  return (
    <div className="col mb-3">
      <div className="card h-100 shadow bg-white rounded">
        <Link to={`/item/${id}`} onClick={() => openItemPage(id)}>
          <img src={img} className="card-img-top" alt="..."/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
          <p className="card-text"><small className="text-muted">{weight}</small></p>

        </div>
        <div className="card-footer">
          <div className='row align-items-center'>
            <div className='col'>
              <h5>{price + ' '}{currency}</h5>
            </div>
            <div className='col-auto'>
                {isItemsInCart()}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  inCart: state.inCart,
  locals: state.localization,
});

export default connect(mapStateToProps)(Item);
