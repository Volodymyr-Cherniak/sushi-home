import React from "react";

const Item = ({sushi}) => {
  const {name, img, text, price} = sushi;

  return (
    <div className="col mt-lg-3">
      <div className="card h-100 shadow bg-white rounded">
        <a href="/item/id" >
          <img src={img} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <div className='row h-100'>
            <div className='col'>
              <h5>{price}</h5>
            </div>
            <div className='col-auto'>
              <button className='btn btn-success'>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item;
