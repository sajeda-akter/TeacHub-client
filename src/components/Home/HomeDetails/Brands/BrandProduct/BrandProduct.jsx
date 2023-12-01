import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";
import { useEffect, useState } from "react";

const BrandProduct = () => {
    const products=useLoaderData()
    const [brandAllProduct,setBrandAllProduct]=useState([])
   
    console.log(brandAllProduct)
    return (
        <div className="bg-[#FAF8ED] py-12">
            
        <div className="grid grid-cols-1 lg:grid-cols-2 w-8/12 mx-auto gap-5">
        {
                products.map(brand=><AllProduct key={brand._id} product={brand}>

                </AllProduct>)
            }
        </div>
        </div>
    );
};

export default BrandProduct;