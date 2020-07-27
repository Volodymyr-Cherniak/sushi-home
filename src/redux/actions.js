export function pageItemById(id) {
  return {type: 'OPEN_PAGE_BY_ID', payload: id}
}

export function addToCart(args) {
  return {type: 'ADD_ITEM_TO_CART', payload: args}
}

export function incrementCount(args) {
  return {type: 'INCREMENT_COUNT', payload: args}
}

export function decrementCount(args) {
  return {type: 'DECREMENT_COUNT', payload: args}
}

export function deleteItem(args) {
  return {type: 'DELETE_ITEM_IN_CART', payload: args}
}
export function clearCart() {
  return {type: 'CLEAR_ITEMS_IN_CART'}
}
export function clearCurrentItem() {
  return {type: 'CLEAR_CURRENT_ITEM'}
}
export function changeLanguage(boolean) {
  return {type: 'CHANGE_LANGUAGE', payload: boolean}
}
