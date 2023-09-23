import { productsReducer } from './productsReducer'

class Store {
  state = {}

  constructor(reducers) {
    this.reducers = reducers
  }

  dispatch(action) {
    for (const reducerName in this.reducers) {
      const reducer = this.reducers[reducerName]
      const newState = reducer(this.state[reducerName], action)
      this.state[reducerName] = newState
    }
  }
}

export const store = new Store({
  products: productsReducer()
})