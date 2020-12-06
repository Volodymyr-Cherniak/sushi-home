import axios from "axios";
import {address} from "../constans";

export default function sendText(args, itemsInCart, setSuccess, clearCart) {
  const cartItems = itemsInCart.map(el => el.name + '(' + el.count + ')');
  const newArgs = {...args, info: '(' + args.info + ')'};

  const textMessage = Object.values(newArgs) + ',' + cartItems;
  setSuccess(true);
  clearCart();
  axios.get(`${address.remote}/chat?message=${textMessage}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}