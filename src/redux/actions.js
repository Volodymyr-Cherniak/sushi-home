export function pageItemById(id) {
  return {type: 'OPEN_PAGE_BY_ID', payload: id}
}

export function addToBasket(args) {
  return {type: 'ADD_ITEM_TO_BASKET', payload: args}
}

export function incrementCount(args) {
  return {type: 'INCREMENT_COUNT', payload: args}
}

export function decrementCount(args) {
  return {type: 'DECREMENT_COUNT', payload: args}
}

export function deleteItem(args) {
  return {type: 'DELETE_ITEM_IN_BASKET', payload: args}
}
