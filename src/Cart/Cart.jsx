import React from "react";
import { Product } from "../Product/Product";
import { useSelector } from "react-redux";

export function Cart() {
    const products = useSelector(state => state.products)

    return (
        <ul className="cart">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    );
}
