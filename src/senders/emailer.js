import axios from "axios";
import apiUrl from "../utils/httpMethods";

export default function sendEmail(args, itemsInCart, setSuccess, clearCart) {
  const cartItems = itemsInCart.map(el => ({name: el.name, count: el.count}));
  axios
    .post(`${apiUrl}/email`, {...args, cartItems})
    .then(res => {
      console.log(res)
      if (res) {
        setSuccess(true);
        clearCart();
      }
    })
    .catch(err => console.log('errr', err));
}