import { productsReducer } from './productsReducer.js'

class Store {
  state = {}
  subscribers = []

  constructor(reducers) {
    this.reducers = reducers
  }

  getState() {
    return this.state
  }

  dispatch(action) {
    for (const reducerName in this.reducers) {
      const reducer = this.reducers[reducerName]
      const newState = reducer(this.state[reducerName], action)
      this.state[reducerName] = newState
    }

    this.subscribers.forEach(cb => cb())
  }

  subscribe(cb) {
    this.subscribers.push(cb)
  }
}

export const store = new Store({
  products: productsReducer
})