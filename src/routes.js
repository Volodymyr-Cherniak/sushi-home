import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Contacts from "./Components/Contacts";
import Cart from "./Components/CartItems";
import MenuItems from "./Components/MenuItems";
import ItemPage from "./Components/ItemPage";

const UseRoutes = () => {
  return (
    <Switch>
      <Route path="/sushi-home">
        <MenuItems/>
      </Route>

      <Route path="/sushi-home/contacts">
        <Contacts/>
      </Route>

      <Route path="/sushi-home/cart">
        <Cart/>
      </Route>

      <Route path="/sushi-home/item/:id">
        <ItemPage/>
      </Route>

      <Redirect to='/sushi-home'/>
    </Switch>
  );
}

export default UseRoutes;
