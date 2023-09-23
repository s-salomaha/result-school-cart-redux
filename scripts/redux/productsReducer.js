import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from './actions.js'
import { products } from '../constants.js'

export function productsReducer(state = products, action) {
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
