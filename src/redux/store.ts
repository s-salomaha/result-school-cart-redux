import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from './productsReducer'
import { logActionMiddleware } from "./logActionMiddleware";
import { orderReducer } from "./orderReducer";
import thunkMiddleware from "redux-thunk"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "@redux-devtools/extension"

const rootReducer = persistReducer(
  { key: 'redux', storage: storage, throttle: 100000 },
  combineReducers({
    products: productsReducer,
    order: orderReducer
  })
)

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logActionMiddleware))
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type RootState = ReturnType<typeof rootReducer>