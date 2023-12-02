import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Register/Login/Login";
import Signup from "../components/Register/Signup/Signup";
import MyCart from "../components/MyCart/MyCart";
import AddToCart from "../components/AddToCart/AddToCart";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BrandProduct from "../components/Home/HomeDetails/Brands/BrandProduct/BrandProduct";
import ProductDetails from "../components/Home/HomeDetails/Brands/BrandProduct/AllProduct/ProdductDetails/ProductDetails";
import UpdateForm from "../components/UpdateForm/UpdateForm";




export const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage/>,
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
                loader:()=>fetch("http://localhost:5000/addproduct"),
                element:<PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path:'/addtocart',
                element:<PrivateRoute><AddToCart/></PrivateRoute>
            },
            {
                path:'/allproduct/:id',
                loader:()=>fetch("http://localhost:5000/products"),
                element:<BrandProduct/>
            },
            {
                path:'/brandProduct/:id',
                loader:()=>fetch(`http://localhost:5000/products`),
                element:<PrivateRoute><ProductDetails/></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<UpdateForm/>
            },
            {
                path:'/mycart',
                loader:()=>fetch("http://localhost:5000/addproduct"),
                element:<MyCart/>
            }
            
         

        ]
    }
])