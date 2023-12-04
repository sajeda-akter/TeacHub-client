// import { Rating } from "@smastrom/react-rating";
import { Rating } from "@smastrom/react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../AuthProvider/AuthProvider";


const ProductDetails = () => {
  const {user}=useContext(AuthContext)
  const products = useLoaderData();
  const { id } = useParams();
  const product = products.find((data) => data._id === id);

  const newProduct = {
    name: product.name,
    brand_name: product.brand_name,
    img: product.img,
    type: product.type,
    price: product.price,
    rating: product.rating,
    description: product.description,
    user:user.displayName ,
    email:user.email
  };

  const handleAddProduct = () => {
    fetch("https://tech-hub-server-6xjjg48w3-sajedaakter16.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully add a product",
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(data);
      });
  };



  return (
    <div className="lg:w-8/12 mx-auto bg-[#F7EFE5] p-12 my-12 rounded-md">
      <img src={product.img} className="w-96 mx-auto rounded-xl" alt="" />
      <div className="lg:text-center  text-xl mt-12 ">
        <p className="lg:mr-12 text-[18px]">{product.description}</p>
        <div className="flex mt-4 lg:ml-32  gap-12">
          <h1 className="font-medium  text-2xl">
            Brand:
            <span className=" my-5 ">{product.brand_name}</span>
          </h1>
          <p className="font-medium">Name:{product.name}</p>
        </div>
        <div className=" font-medium lg:ml-32 flex my-3 gap-12">
          <p>Type:{product.type}</p>
          <p>Price:{product.price}</p>
        </div>
        <p className="lg:ml-32 flex mt-3">
          <Rating style={{ maxWidth: 180 }} value={product.rating} readOnly />
        </p>
      </div>
        <div className=" my-5 w-56 lg:w-1/4 mx-auto">
        <button className="w-60  border-2 border-indigo-800 text-xl  font-medium rounded-lg   p-3" onClick={handleAddProduct}>Add To Cart</button>

        </div>
    </div>
  );
};

export default ProductDetails;
