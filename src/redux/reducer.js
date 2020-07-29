import {Generalstate} from "../constans";


const initialState = {
  localization: {...Generalstate.language.ukr.localization},
  sushiItems: [...Generalstate.language.ukr.items],
  currentItem: {},
  inCart: [],
  english: false,
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

    case 'CLEAR_CURRENT_ITEM':
      return {
        ...state,
        currentItem: {},
      }

    case 'CHANGE_LANGUAGE':
      state.english = !state.english;
      if (state.english) {
        return {
          ...state,
          localization: Generalstate.language.eng.localization,
          sushiItems: Generalstate.language.eng.items,
          currentItem: {},
          inCart: [],
        }
      } else {
        return {
          ...state,
          localization: Generalstate.language.ukr.localization,
          sushiItems: Generalstate.language.ukr.items,
          currentItem: {},
          inCart: [],
        }
      }

    default:
      return state;
  }
}

export default sushiItems;
