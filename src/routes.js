import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Contacts from "./pages/Contacts";
import Basket from "./pages/Basket";
import MenuItems from "./pages/MenuItems";
import ItemPage from "./pages/ItemPage";

const UseRoutes = (props) => {
  return (
    <Switch>
      <Route path="/sushi-home">
        <MenuItems/>
      </Route>

      <Route path="/contacts">
        <Contacts/>
      </Route>

      <Route path="/basket">
        <Basket/>
      </Route>

      <Route path="/item/id">
        <ItemPage/>
      </Route>

      <Redirect to='/sushi-home'/>
    </Switch>
  );
}

export default UseRoutes;
