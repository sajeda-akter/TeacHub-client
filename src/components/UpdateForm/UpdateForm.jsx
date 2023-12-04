import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateForm = () => {
  const {user}=useContext(AuthContext)
  const products=useLoaderData()
  // const {_id, img, name, brand_name, type, price, rating } = products;
 const product=products[0]
 console.log(product)
  
   
  const updatedProduct=(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const brand=form.brand.value
    const rating=form.rating.value
    const price=form.price.value
    const type=form.type.value
    const img=form.photoURL.value
    const description=form.description.value

    const updateProduct={
      name,brand,img,type,price,rating,description,email:user.email,user:user.displayName
    }
    fetch(`https://tech-hub-server-rust.vercel.app/addproduct/${product._id}`,{
      method:"PUT",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(updateProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
 
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your Product has been updated",
  showConfirmButton: false,
  timer: 1000
});
    })
  }
    return (
        <div className="mt-4">
        <h1 className="text-4xl text-center font-medium my-4 text-[#FF6969] border-b-4 border-[#FEA1A1] w-4/12 mx-auto h-12">
      Update the product details
        </h1>
  
        <form
        onSubmit={updatedProduct}
          action=""
          className="bg-[#FFEBD8] lg:w-2/4 grid grid-cols-2   gap-3 mx-auto p-12 rounded-xl"
        >
          <input
            type="text"
            placeholder="Enter product name"
            name="name"
            defaultValue={product.name}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Enter brand name"
            name="brand"
            defaultValue={product.brand_name}
            className="input input-bordered w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Enter product photoURL"
            name="photoURL"
            defaultValue={product.img}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Enter product type"
            name="type"
            defaultValue={product.type}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Product price"
            name="price"
            defaultValue={product.price}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Product rating"
            name="rating"
            defaultValue={product.rating}
            className="input input-bordered w-full max-w-xs"
          />
          <textarea name="description" defaultValue={product.description} className="textarea textarea-bordered h-32 col-span-2" placeholder="Write product description"></textarea>
          <button className="btn btn-active btn-primary w-52 mt-4 ml-24 lg:ml-56">Submit</button>
        
        </form>
      </div>
    );
};

export default UpdateForm;