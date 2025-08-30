// Steg 2 efter models, gör state (hook eller reducer t.ex) tillgängligt för alla komponenter

import { createContext, type Dispatch } from "react";
import type { CartItem } from "../models/CartItem"
import type { CartAction } from "../reducers/CartReducer";

type CartContextType = {
    cart: CartItem[];
    dispatch: Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType>({
    cart: [],
    dispatch: () => {},
});