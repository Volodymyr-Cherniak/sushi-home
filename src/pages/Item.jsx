import React from "react";
import {Link} from "react-router-dom";

const Item = ({sushi, openItemPage, addItemInCart}) => {
  const {name, img, text, price, weight, id, currency} = sushi;

  return (
    <div className="col mt-lg-3">
      <div className="card h-100 shadow bg-white rounded">
        <Link to={`/item/${id}`} onClick={() => openItemPage(id)}>
          <img src={img} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
          <p className="card-text"><small className="text-muted">{weight}</small></p>

        </div>
        <div className="card-footer">
          <div className='row h-100'>
            <div className='col'>
              <h5>{price}{currency}</h5>
            </div>
            <div className='col-auto'>
              <button className='btn btn-success' onClick={()=>addItemInCart(sushi)}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item;
