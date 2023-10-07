import React from "react";
import { round } from "../utils";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createOrder } from "../redux/orderReducer";
import { useGetProductsQuery } from "../redux/productsReducer";

export function Total() {
    const { data: products } = useGetProductsQuery()
    const total = useAppSelector(state => {
        if (!products) {
            return {
                subtotal: 0,
                tax: 0,
                total: 0
            }
        }
        const subtotal = products.reduce((acc, product) => {
            return acc + product.price * (state.products[product.id] || 0)
        }, 0);
        const tax = subtotal * .13;
        const total = subtotal + tax;

        return {
            subtotal: round(subtotal),
            tax: round(tax),
            total: round(total)
        };
    })

    const dispatch = useAppDispatch()
    const disableBuyButton = useAppSelector(state => state.order.confirmed)

    return <table className="bill">
        <tbody>
            <tr className="subtotal">
                <td className="label">Subtotal :</td>
                <td className="value">$ {total.subtotal}</td>
            </tr>
            <tr className="salestax">
                <td className="label">Sales tax :</td>
                <td className="value">$ {total.tax}</td>
            </tr>
            <tr className="total">
                <td className="label">Total :</td>
                <td className="value">$ {total.total}</td>
            </tr>
            <tr>
                <td colSpan={2} className="button-cell">
                    <button
                      className="main-button"
                      onClick={() => dispatch(createOrder())}
                      disabled={disableBuyButton}
                    >
                        Buy
                    </button>
                </td>
            </tr>
        </tbody>
    </table>;
}
