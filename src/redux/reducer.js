import {sushi} from "../constans";


const initialState = {
  sushiItems: [...sushi],
  currentItem: {},
  inCart: [],
};

const sushiItems = (state = initialState, action) => {
  switch (action.type) {

    case 'OPEN_PAGE_BY_ID':
      return ({
        ...state,
        currentItem: state.sushiItems.find(el => el.id === action.payload)
      });

    case 'ADD_ITEM_TO_CART':
      return ({
        ...state,
        inCart: (() => {
          const exist = state.inCart.filter(el => el.id === action.payload.id)
          if (exist.length > 0) {
            return state.inCart.map(el => {
              if (el.id === action.payload.id) return {...el, count: el.count + 1, sum: el.sum + action.payload.price}
              return el
            })
          }
          return [...state.inCart, {...action.payload, sum: action.payload.price}]
        })()
      });

    case 'INCREMENT_COUNT':
      return {
        ...state,
        inCart: state.inCart.map(el => {
          if (el.id === action.payload.id) return {...el, count: el.count + 1, sum: el.sum + action.payload.price}
          return el
        })
      }

    case 'DECREMENT_COUNT':
      return {
        ...state,
        inCart: state.inCart.map(el => {
          if (el.id === action.payload.id) {
            if (el.count > 1) return {...el, count: el.count - 1, sum: el.sum - action.payload.price}
          }
          return el
        })
      }
    case 'DELETE_ITEM_IN_CART':
      return {
        ...state,
        inCart: state.inCart.filter(el => el.id !== action.payload.id)
      }

    case 'CLEAR_ITEMS_IN_CART':
      return {
        ...state,
        inCart: [],
      }


    default:
      return state;
  }
}

export default sushiItems;
