import { combineReducers } from "redux";
import { productsApiSlice, productsSlice } from './productsReducer'
import { logActionMiddleware } from "./logActionMiddleware";
import { orderApiSlice } from "./orderReducer";
import thunkMiddleware from "redux-thunk"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = persistReducer(
  { key: 'redux', storage: storage },
  combineReducers({
    products: productsSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer
  })
)

export const store = configureStore(
  {
    reducer: rootReducer,
    devTools: true,
    middleware: [
      orderApiSlice.middleware,
      productsApiSlice.middleware,
      thunkMiddleware,
      logActionMiddleware
    ]
  }
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type RootState = ReturnType<typeof rootReducer>