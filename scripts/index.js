import { products } from './constants.js'
import { renderProduct, renderCartTotal } from './renderer.js'
import { calcCartTotal } from './calc.js';

products.forEach(renderProduct);
renderCartTotal(
    calcCartTotal(products)
)




