import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands,setBrands]=useState([])

    useEffect(()=>{
        fetch('brands.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div className="mt-20 mb-12">
            <h1 className="text-4xl text-center font-medium my-4 text-[#FF6969] border-b-4 border-[#FEA1A1] w-52 mx-auto h-12">Our Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 justify-items-center content-center  lg:w-10/12 mx-auto">
                {
                    brands.map(brand=>
                        <Link key={brand.id} to="/brandProduct">
                        <div  className="card w-96 h-80 glass bg-[#FFEBD8]">
                        <figure><img src={brand.img} className="w-full h-52" alt={brand.name}/></figure>
                        <div className="card-body">
                          <h2 className="card-title text-3xl text-[#E94560] text-center">{brand.name}</h2>
                          
                        </div>
                      </div>
                        </Link>
                        )
                }
            </div>
         
        </div>
    );
};

export default Brands;