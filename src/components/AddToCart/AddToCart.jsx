import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToCart = () => {
  const {user}=useContext(AuthContext)
  console.log(user)
  const handleAddProduct=(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const brand=form.brand.value
    const rating=form.rating.value
    const price=form.price.value
    const type=form.type.value
    const img=form.photoURL.value
    const description=form.description.value
    const newProduct={
      name,brand,img,type,price,rating,description,email:user.email,user:user.displayName
    }
    fetch('https://tech-hub-server-6xjjg48w3-sajedaakter16.vercel.app/addproduct',{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
 
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1000
});
      console.log(data)
    })
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-medium my-4 text-[#FF6969] border-b-4 border-[#FEA1A1] w-72 mx-auto h-12">
    Add To Product
      </h1>

      <form
      onSubmit={handleAddProduct}
        action=""
        className="bg-[#FFEBD8] lg:w-2/4 grid grid-cols-2   gap-3 mx-auto p-12 rounded-xl"
      >
        <input
          type="text"
          placeholder="Enter product name"
          name="name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Enter brand name"
          name="brand"
          className="input input-bordered w-full max-w-xs "
        />
        <input
          type="text"
          placeholder="Enter product photoURL"
          name="photoURL"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Enter product type"
          name="type"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Product price"
          name="price"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Product rating"
          name="rating"
          className="input input-bordered w-full max-w-xs"
        />
        <textarea name="description" className="textarea textarea-bordered h-32 col-span-2" placeholder="Write product description"></textarea>
        <button className="btn btn-active btn-primary w-52 mt-4 ml-24 lg:ml-56">Add To Cart</button>

      
      </form>
    </div>
  );
};

export default AddToCart;
