import { combineReducers, createStore } from "redux";
import { productsReducer } from './productsReducer'


export const store = createStore(
  combineReducers({
    products: productsReducer
  })
)
