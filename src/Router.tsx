import { createBrowserRouter } from "react-router";
import { Products } from "./pages/products/Products";
import { Cart } from "./pages/cart/cart";
import { Layout } from "./pages/Layout";

// Router - vilken sida/outlet som ska visas beroende på URLn

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Products/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ]
    }
])