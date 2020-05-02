import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {addToBasket} from "../redux/actions";

const ItemPage = ({currentItem, addToBasket}) => {
  const {name, img, text, price, weight, currency} = currentItem;
  console.log('sushiItem', currentItem)

  if (!currentItem.img) return <Redirect to='/sushi-home'/>

  return (
    <div className="card mb-3 mt-3" style={{maxWidth: 'auto'}}>
      <div className="row no-gutters">
        <div className="col-7">
          <img src={img} className="card-img" alt="..."/>
        </div>
        <div className="col-5">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text"><small className="text-muted">{weight}</small></p>
            <div className="card-footer">
              <div className='row h-100'>
                <div className='col'>
                  <h5>{price}{currency}</h5>
                </div>
                <div className='col-auto'>
                  <button className='btn btn-success' onClick={()=>addToBasket(currentItem)}>
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentItem: state.currentItem
})
const mapDispatchToProps = dispatch => ({
  addToBasket: (args) => dispatch(addToBasket(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
