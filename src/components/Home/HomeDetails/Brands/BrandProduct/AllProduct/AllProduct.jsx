import { Link } from "react-router-dom";

const AllProduct = ({ product }) => {
  const {_id, img, name, brand_name, type, price, rating } = product;
  //  const handleDetails=_id=>{
  //   console.log(_id)
  //  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt={name} className="lg:w-52 w-96 h-5/12 lg:h-full object-fit" />
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
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
