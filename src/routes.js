import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Contacts from "./pages/Contacts";
import Basket from "./pages/BasketItems";
import MenuItems from "./pages/MenuItems";
import ItemPage from "./pages/ItemPage";

const UseRoutes = () => {
  return (
    <Switch>
      <Route path="/sushi">
        <MenuItems/>
      </Route>

      <Route path="/contacts">
        <Contacts/>
      </Route>

      <Route path="/basket">
        <Basket/>
      </Route>

      <Route path="/item/:id">
        <ItemPage/>
      </Route>

      <Redirect to='/sushi'/>
    </Switch>
  );
}

export default UseRoutes;
