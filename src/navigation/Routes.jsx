import { useRoutes } from "react-router-dom";
import Products from "../components/products/Products";

import ProductDetails from "../pages/productDetails/ProductDetails";
import Home from "../pages/Home";


const Routes = () => {
    return useRoutes([
        {path: "/", element: <Home /> },
        {path: "/about", element: <div>About</div>},
        {path: "/products", element: <Products />},
        { path: "/products/:id", element: <ProductDetails /> },

    ]);
};
export default Routes