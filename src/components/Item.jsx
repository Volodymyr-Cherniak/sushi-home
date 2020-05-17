import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Item = ({currentItem, openItemPage, addItemInCart, inCart}) => {

  const {name, img, text, price, weight, id, currency} = currentItem;

  const ItemsInCart = inCart.find(el => el.id === id);

  const isItemsInCart = () => {
    if(ItemsInCart) {
      return <button className='btn btn-warning' onClick={() => addItemInCart(currentItem)}>{'In cart ' + ItemsInCart.count}</button>
    }
    return <button className='btn btn-success' onClick={() => addItemInCart(currentItem)}>In cart</button>
  }

  return (
    <div className="col mt-lg-3">
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
});

export default connect(mapStateToProps)(Item);