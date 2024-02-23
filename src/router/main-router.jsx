import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import Home from "../pages/home";
import Shop from "../components/shop";
import Product from "../components/product";
import About from "../components/about";




const route = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
              index: true,
              Component : Home, 
            },
            {
                path : "shop",
                Component:Shop
            },
            {
                path:"product",
                Component: Product
            },
            {
                path : "about",
                Component: About
            }
        ]

    }
])

const MainRouter = () => {
    return <RouterProvider router={route}/>;
}

export default MainRouter;