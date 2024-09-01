import { createHashRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import NotFound from "../pages/notfound/NotFound";

export const route = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/product/:id', element: <Product /> },
    { path: '*', element: <NotFound /> },
])