import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MianLayout from "../Layouts/MianLayout";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MianLayout,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <p>loading...</p>,
        children: [
            {
                index: true,
                Component: Home,
            },

            {
                path: '/products',
                Component: Products
            },
            {
                path:'/wishlist',
                Component: WishList,
            },
            {
                path: '/product/:id',
                Component : ProductDetails
            }
        ]
    },

   

])

export default router