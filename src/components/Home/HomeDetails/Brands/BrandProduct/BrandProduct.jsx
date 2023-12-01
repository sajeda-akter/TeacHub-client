import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";
import { useEffect } from "react";

const BrandProduct = () => {
    const products=useLoaderData()
       useEffect(()=>{
        

       },[])
    return (
        <div>
            
            {
                products.map(brand=><AllProduct key={brand.id}>

                </AllProduct>)
            }
        </div>
    );
};

export default BrandProduct;