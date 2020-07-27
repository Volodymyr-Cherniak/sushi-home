import React, {useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {clearCart, decrementCount, deleteItem, incrementCount, pageItemById} from "../redux/actions";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import {address} from "../constans";
import axios from "axios";
import {get} from 'lodash';

const CartItems = (props) => {
  const {incrementCount, decrementCount, deleteItem, clearCart, pageItemById} = props;

  const itemsInCart = get(props, 'itemsInCart', []);
  const locals = get(props, 'locals', {});

  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //////////////Twilio//////////////
  const sendText = (args) => {
    const cartItems = itemsInCart.map(el => el.name + '(' + el.count + ')');
    const newArgs = {...args, info: '(' + args.info + ')'};

    const textMessage = Object.values(newArgs) + ',' + cartItems;
    setSuccess(true);
    clearCart();
    axios.get(`${address.remote}/.netlify/functions/api/send-text?message=${textMessage}`, {mode: 'no-cors'})
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }

  /////////////email-sender///////////////
  const sendEmail = async (args) => {
    const cartItems = itemsInCart.map(el => ({name: el.name, count: el.count}));
    await axios
      .post(`${address.remote}/.netlify/functions/api/send-text-toEmail`, {...args, cartItems})
      .then(res => {
        console.log(res)
        if (res) {
          setSuccess(true);
          clearCart();
        }
      })
      .catch(err => console.log(err));
  }
  /////////////////////////////////////


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
        <Checkout toggle={toggle} modal={modal} sendText={sendText} sendEmail={sendEmail} locals={locals}/>
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
