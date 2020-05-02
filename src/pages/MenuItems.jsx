import React from "react";
import Item from "./Item";
import {connect} from "react-redux";
import {addToBasket, pageItemById} from "../redux/actions";


const MenuItems = (props) => {

  console.log('props', props.sushiItems);

  const openItemPage = (id) => {
    props.pageItemById(id)
    console.log('id', id)
  }

  const addItemInBasket = (args) => {
    props.addToBasket(args);
    console.log('args', args);
  }

  return (
    <div>
      <h2>Смачненькі суші у нас</h2>
      <div className="card-deck">
        <div className="row row-cols-lg-3 row-cols-sm-2">
          {props.sushiItems.map(el => <Item key={el.id}
                                            sushi={el}
                                            openItemPage={openItemPage}
                                            addItemInBasket={addItemInBasket}
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
  addToBasket: (args) => dispatch(addToBasket(args)),
});


export default connect(mapStateToProps,mapDispatchToProps)(MenuItems);
