import React from "react";
import Item from "./Item";
import {connect} from "react-redux";
import {addToCart, pageItemById} from "../redux/actions";


const MenuItems = (props) => {

  const openItemPage = (id) => {
    props.pageItemById(id)
  }

  const addItemInCart = (args) => {
    props.addToCart(args);
  }

  return (
    <div>
      <div className="card-deck">
        <div className="row row-cols-lg-3 row-cols-sm-2">
          {props.sushiItems.map(el => <Item key={el.id}
                                            currentItem={el}
                                            openItemPage={openItemPage}
                                            addItemInCart={addItemInCart}
          />)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  sushiItems: state.sushiItems
});

const mapDispatchToProps = dispatch => ({
  pageItemById: (id) => dispatch(pageItemById(id)),
  addToCart: (args) => dispatch(addToCart(args)),
});


export default connect(mapStateToProps,mapDispatchToProps)(MenuItems);
