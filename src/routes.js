import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Contacts from "./Components/Contacts";
import Cart from "./Components/CartItems";
import MenuItems from "./Components/MenuItems";
import ItemPage from "./Components/ItemPage";

const UseRoutes = () => {
  return (
    <Switch>

      <Route path="/contacts">
        <Contacts/>
      </Route>

      <Route path="/cart">
        <Cart/>
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
