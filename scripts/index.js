import { products } from './constants.js'
import { renderProduct, renderCartTotal } from './renderer.js'
import { calcCartTotal } from './calc.js';
import { store } from './redux/store.js'

store.subscribe(() => {
  store.getState().products.forEach(renderProduct)
})

store.subscribe(() => {
  renderCartTotal(
    calcCartTotal(store.getState().products)
  )
})

store.dispatch({ type: 'INIT' })
