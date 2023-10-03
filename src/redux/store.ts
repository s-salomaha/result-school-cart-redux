import { combineReducers } from "redux";
import { productsSlice } from './productsReducer'
import { logActionMiddleware } from "./logActionMiddleware";
import { orderReducer } from "./orderReducer";
import thunkMiddleware from "redux-thunk"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = persistReducer(
  { key: 'redux', storage: storage, throttle: 100000 },
  combineReducers({
    products: productsSlice.reducer,
    order: orderReducer
  })
)

export const store = configureStore(
  {
    reducer: rootReducer,
    devTools: true,
    middleware: [thunkMiddleware, logActionMiddleware]
  }
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type RootState = ReturnType<typeof rootReducer>