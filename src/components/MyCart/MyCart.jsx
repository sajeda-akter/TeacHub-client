import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
  const {user}=useContext(AuthContext)
  console.log(user.email)
    const allDatas=useLoaderData()
    const findData=allDatas.filter(product=>product.email===user.email)
    console.log(findData)
    const handleDelete=_id=>{
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/addproduct/${_id}`,{
                method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount> 0){
                        Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
                }
              })
          
            }
          });
    }

    return (
        <div className="mt-32">
           <div className="lg:w-10/12 gap-12 grid grid-cols-2  mx-auto">
            {
                findData.map(product=>
                    <div key={product._id} className="card lg:card-side bg-red-100 shadow-xl h-72">
  <figure><img src={product.img} className="h-full w-56" alt={product.name}/></figure>
  <div className="card-body h-32">
    <h2 className="card-title text-2xl">{product.brand_name}</h2>
    <p>{product.type}</p>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary" onClick={()=>handleDelete(product._id)}>Delete</button>
    </div>
  </div>
</div>
                    )
            }
           </div>
        </div>
    );
};

export default MyCart;