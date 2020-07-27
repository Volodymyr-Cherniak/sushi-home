import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {addToCart, clearCurrentItem} from "../redux/actions";

const ItemPage = (props) => {
  const {currentItem, addToCart, inCart, locals} = props;
  const {name, img, text, price, weight, currency, id} = currentItem;

  useEffect(() => {
    return () => props.clearCurrentItem();
  }, []);


  if (!currentItem.img) return <Redirect to='/sushi-home'/>

  const ItemsInCart = inCart.find(el => el.id === id);

  const isItemsInCart = () => {
    if(ItemsInCart) {
      return locals.buttons.inCart + ' ' + ItemsInCart.count
    }
    return locals.buttons.inCart
  }


  return (
    <div className="card mb-3 mt-3" style={{maxWidth: 'auto'}}>
      <div className="row no-gutters">
        <div className="col-lg-7">
          <img src={img} className="card-img" alt="..."/>
        </div>
        <div className="col-lg-5">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text"><small className="text-muted">{weight}</small></p>
            <div className="card-footer">
              <div className='row h-100'>
                <div className='col'>
                  <h5>{price + ' '}{currency}</h5>
                </div>
                <div className='col-auto'>
                  <button className='btn btn-success' onClick={()=>addToCart(currentItem)}>
                    {isItemsInCart()}
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
  currentItem: state.currentItem,
  inCart: state.inCart,
  locals: state.localization,
})
const mapDispatchToProps = dispatch => ({
  addToCart: (args) => dispatch(addToCart(args)),
  clearCurrentItem: () => dispatch(clearCurrentItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
