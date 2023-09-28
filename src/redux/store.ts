import {applyMiddleware, combineReducers, createStore} from "redux";
import { productsReducer } from './productsReducer'
import {logActionMiddleware} from "./logActionMiddleware";
import { orderReducer } from "./orderReducer";
import thunkMiddleware from "redux-thunk"


const rootReducer = combineReducers({
  products: productsReducer,
  order: orderReducer
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logActionMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>