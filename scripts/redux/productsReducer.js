import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from './actions'

export function productsReducer(state, action) {
  switch (action.type) {
    case INCREASE_QUANTITY_ACTION:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
      })

    case DECREASE_QUANTITY_ACTION:
      return state.map((product) => {
        if (product.id === action.payload.id && product.quantity >  0) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
      })

    default:
      break
  }

  return state
}
