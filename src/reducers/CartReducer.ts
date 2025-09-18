import { saveCartToLocalStorage } from "../helpers/Ls";
import type { CartItem } from "../models/CartItem";
import type { Product } from "../models/Product";

export enum CartActionTypes {
    ADDED,
    REMOVED,
    INCREASED,
    DECREASED,
};

export type CartAction = {
    type: CartActionTypes;
    payload: string;
};

export const CartReducer = (cart: CartItem[], action: CartAction) => {
    switch (action.type) {
        case CartActionTypes.ADDED: {
            const productWithAmount = JSON.parse(action.payload);
            const productToAdd: Product = { ...productWithAmount };
            const amount = productWithAmount.amount || 1;

            const foundCartItem = cart.find(
                (ci) => ci.product.id === productToAdd.id,
            );

            let returnValue;
            if (foundCartItem) {
                returnValue = cart.map((ci) =>
                    ci.product.id === foundCartItem.product.id
                        ? { ...ci, amount: ci.amount + amount }
                        : ci
                );
            } else {
                returnValue = [...cart, { product: productToAdd, amount }];
            }

            saveCartToLocalStorage(JSON.stringify(returnValue));
            return returnValue;
        }


        case CartActionTypes.REMOVED: {
            const returnValue = cart.filter(
                (ci) => ci.product.id !== +action.payload,
            );
            saveCartToLocalStorage(JSON.stringify(returnValue));

            return returnValue;
        }

        case CartActionTypes.INCREASED: {
            const productId = +action.payload;

            const returnValue = cart.map((ci) => {
                if (ci.product.id === productId) {
                    return { ...ci, amount: ci.amount + 1 };
                }
                return ci;
            });
            saveCartToLocalStorage(JSON.stringify(returnValue));

            return returnValue;
        }

        case CartActionTypes.DECREASED: {
            const productId = +action.payload;

            const returnValue = cart.map((ci) => {
                if (ci.product.id === productId) {
                    return { ...ci, amount: ci.amount - 1 };
                }
                return ci;
            });
            saveCartToLocalStorage(JSON.stringify(returnValue));

            return returnValue;
        }
        default: return cart;
    }
};