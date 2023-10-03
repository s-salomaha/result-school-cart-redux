import { ThunkAction }  from "redux-thunk";
import { RootState } from "./store";
import {AnyAction} from "redux";

export const CREATE_ORDER_ACTION = 'CREATE_ORDER_ACTION'
export const CREATE_ORDER_SUCCESS_ACTION = 'CREATE_ORDER_SUCCESS_ACTION'
export const RESET_ORDER_ACTION = 'RESET_ORDER_ACTION'

export function createOrderAction(): ThunkAction<void, RootState, void, AnyAction> {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_ACTION })

    const res = await fetch('https://mocki.io/v1/ef0ab56e-437a-4833-999d-8cc5803101ea')
    const data = await res.json()

    if (data.success) {
      dispatch({ type: CREATE_ORDER_SUCCESS_ACTION })
    } else {
      dispatch({ type: RESET_ORDER_ACTION })
    }
  }
}
