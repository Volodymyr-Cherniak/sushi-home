import axios from "axios";
import {address} from "../constans";

export default function sendEmail(args, itemsInCart, setSuccess, clearCart) {
  const cartItems = itemsInCart.map(el => ({name: el.name, count: el.count}));
  axios
    .post(`${address.remote}/email`, {...args, cartItems})
    .then(res => {
      console.log(res)
      if (res) {
        setSuccess(true);
        clearCart();
      }
    })
    .catch(err => console.log('errr', err));
}