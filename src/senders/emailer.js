import axios from "axios";
//import apiUrl from "../utils/httpMethods";

export default function sendEmail(args, itemsInCart, setSuccess, clearCart) {
  const cartItems = itemsInCart.map(el => ({name: el.name, count: el.count}));
  //console.log('apiUrl', apiUrl)
  axios
    .post(`${process.env.REACT_APP_HOST_API_SERVER_PROD}/email`, {...args, cartItems})
    .then(res => {
      console.log(res)
      if (res) {
        setSuccess(true);
        clearCart();
      }
    })
    .catch(err => console.log('err', err));
}