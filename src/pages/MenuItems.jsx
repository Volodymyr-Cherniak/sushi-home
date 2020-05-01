import React from "react";
import {sushi} from "../constans";
import Item from "./Item";

const MenuItems = () => {

  return (
    <div>
      <h1>Смачненькі суші у нас</h1>
      <div className="card-deck">
        <div className="row row-cols-lg-3 row-cols-sm-2">
          {sushi.map(el => <Item key={el.name}
                                 sushi={el}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
