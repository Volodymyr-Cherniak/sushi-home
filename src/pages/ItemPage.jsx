import React from "react";
import {sushi} from "../constans";

const ItemPage = () => {
  const {name, img, text, price} = sushi;

  return (
    <div className="card mb-3 mt-3" style={{maxWidth: 'auto'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={sushi[1].img} className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{sushi[1].name}</h5>
            <p className="card-text">{sushi[1].text}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
