// Steg 2 efter models, gör state (hook eller reducer t.ex) tillgängligt för alla komponenter

import { createContext } from "react";
import type { CartItem } from "../models/CartItem"

type CartContextType = {
    cart: CartItem[];
};

export const CartContext = createContext<CartContextType>({
    cart: [],
})