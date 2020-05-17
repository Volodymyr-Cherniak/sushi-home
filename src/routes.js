import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Contacts from "./components/Contacts";
import CartItems from "./components/CartItems";
import MenuItems from "./components/MenuItems";
import ItemPage from "./components/ItemPage";

const UseRoutes = () => {
  return (
    <Switch>

      <Route path="/contacts">
        <Contacts/>
      </Route>

      <Route path="/cart">
        <CartItems/>
      </Route>

      <Route path="/item/:id">
        <ItemPage/>
      </Route>

      <Route path="/">
        <MenuItems/>
      </Route>

      <Redirect to='/'/>
    </Switch>
  );
}

export default UseRoutes;
