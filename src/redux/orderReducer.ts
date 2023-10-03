import { CREATE_ORDER_ACTION, CREATE_ORDER_SUCCESS_ACTION, RESET_ORDER_ACTION } from './actions'
import { AnyAction } from "redux";

const initialState = {
  loading: false,
  confirmed: false
}

export function orderReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CREATE_ORDER_ACTION:
      return {
        loading: true,
        confirmed: false
      }

    case CREATE_ORDER_SUCCESS_ACTION:
      return {
        loading: false,
        confirmed: true
      }

    case RESET_ORDER_ACTION:
      return {
        loading: false,
        confirmed: false
      }

    default:
      break
  }

  return state
}
