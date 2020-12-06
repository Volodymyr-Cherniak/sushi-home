import React, {useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {clearCart, decrementCount, deleteItem, incrementCount, pageItemById} from "../redux/actions";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import {get} from 'lodash';
import sendEmail from "../senders/emailer";
import sendText from "../senders/twilio";

const CartItems = (props) => {
  const {incrementCount, decrementCount, deleteItem, clearCart, pageItemById} = props;

  const itemsInCart = get(props, 'itemsInCart', []);
  const locals = get(props, 'locals', {});

  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //twilio
  const activeText = (args) => {
    sendText(args, itemsInCart, setSuccess, clearCart)
  }

  // email-sender
  const activeEmail = (args) => {
    sendEmail(args, itemsInCart, setSuccess, clearCart)
  }

  const sumAllItems = itemsInCart.reduce((acc, curr) => acc + curr.sum, 0);

  if (!itemsInCart[0] && success === false) {
    return (
      <div className='mt-3'>
        <h5>{locals.cartPage.textGeneral}</h5>

        <Link to={`/sushi-home`}>
          <button className='btn btn-outline-warning mt-2'>{locals.buttons.backToHome}</button>
        </Link>
      </div>
    )
  }


  if (success === true && !itemsInCart[0]) {
    return (
      <div>
        <p className='card mt-3 p-2'>

          {locals.cartPage.textFinish}

        </p>
        <Link to={`/sushi-home`}>
          <button className='btn btn-outline-warning mt-2'>{locals.buttons.backToHome}</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {
        itemsInCart.map(el =>
          <CartItem key={el.name}
                    itemInCart={el}
                    incrementCount={incrementCount}
                    decrementCount={decrementCount}
                    deleteItem={deleteItem}
                    openItemPage={pageItemById}
                    locals={locals}
          />
        )
      }
      <div className='d-flex justify-content-between'>
        <button className='btn btn-outline-danger' onClick={() => clearCart()}>{locals.buttons.clearCart}</button>

        <button className='btn btn-outline-success' onClick={toggle}>{`${locals.buttons.checkout} ${sumAllItems} `}₴
        </button>
      </div>

      <div>
        <Checkout toggle={toggle} modal={modal} sendText={activeText} sendEmail={activeEmail} locals={locals}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  itemsInCart: state.inCart,
  locals: state.localization,
});

const mapDispatchToProps = dispatch => ({
  incrementCount: (args) => dispatch(incrementCount(args)),
  decrementCount: (args) => dispatch(decrementCount(args)),
  deleteItem: (args) => dispatch(deleteItem(args)),
  clearCart: () => dispatch(clearCart()),
  pageItemById: (id) => dispatch(pageItemById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
