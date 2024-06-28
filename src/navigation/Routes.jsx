import { useRoutes } from "react-router-dom";

import ProductDetails from "../pages/productDetails/ProductDetails";
import Home from "../pages/Home";
import Products from "../pages/Products";



const Routes = () => {
    return useRoutes([
        {path: "/", element: <Home /> },
        {path: "/about", element: <div>About</div>},
        {path: "/products", element: <Products />},
        { path: "/products/:id", element: <ProductDetails /> },

    ]);
};
export default Routes