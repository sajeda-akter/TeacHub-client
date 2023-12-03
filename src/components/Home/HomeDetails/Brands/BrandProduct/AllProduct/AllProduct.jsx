import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AllProduct = ({product}) => {
  const {user}=useContext(AuthContext)
  
  const {_id, img, name, brand_name, type, price, rating } = product;



 
  return (
   
   <div>
   
   
     <div className="card lg:card-side bg-red-100 shadow-xl ">
      <figure>
        <img src={img} alt={name} className="lg:w-56 w-full h-72 lg:h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">Name: {name}</h2>
        <p className="text-xl font-medium">Brand: {brand_name}</p>
        
          <p className="text-xl font-medium">Type: {type}</p>
          <p className="text-xl font-medium ">${price}</p>
      
        <p className="text-xl font-medium ">Rating: {rating}</p>
        <div className="card-actions justify-center">
          <Link to={`/brandProduct/${_id}`}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
         <Link to={`/update/${_id}`}>
         <button className="btn btn-primary">Update</button>
         </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AllProduct;
