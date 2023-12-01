import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Register/Login/Login";
import Signup from "../components/Register/Signup/Signup";
import MyCart from "../components/MyCart/MyCart";
import AddToCart from "../components/AddToCart/AddToCart";
import BrandProduct from "../components/Home/HomeDetails/Brands/BrandProduct/BrandProduct";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/mycart',
                element:<MyCart/>
            },
            {
                path:'/addtocart',
                element:<AddToCart/>
            },
            {
                path:'/brandProduct',
                loader:()=>fetch('products.json'),
                element:<BrandProduct/>
            
                
            }

        ]
    }
])