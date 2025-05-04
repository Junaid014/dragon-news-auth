import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";

const router= createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayouts,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:"/",
                    Component:Home
                },
                {
                    path:"/category/:id",
                    Component:CategoryNews,
                    loader:()=>fetch("/news.json")
                },
                
            ]
        },
        {
            path:"/auth",
            Component:AuthLayout,
            children:[
                {
                    path:"/auth/login",
                    Component:Login

                },
                {
                    path:"/auth/register",
                    Component:Register

                }
            ]
        },
        {
            path:'/news-details/:id',
            element:<PrivetRoute>
                <NewsDetails></NewsDetails>
            </PrivetRoute>,
            loader:()=>fetch('/news.json')
        }

])

export default router;