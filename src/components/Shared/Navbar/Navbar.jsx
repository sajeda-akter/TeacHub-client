import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Successfully user logout",
      showConfirmButton: false,
      timer: 1000
    });
  }
  const menuItems=<>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/addtocart">Add Product</NavLink></li>
  <li><NavLink to="/mycart">My Cart</NavLink></li>
{
  user? <button onClick={handleLogout}>Logout</button>:
  <li><NavLink to="/login">Login</NavLink></li>
}
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;