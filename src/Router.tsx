import { createBrowserRouter } from "react-router";
import { Products } from "./pages/products/Products";
import { Layout } from "./pages/Layout";
import { Cart } from "./pages/cart/Cart";

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