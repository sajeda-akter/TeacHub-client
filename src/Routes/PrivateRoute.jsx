import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { space } from "postcss/lib/list";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    // const location=useLocation()

    if(loading){
        return <div className="w-24 mt-16 mx-auto">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'>

    </Navigate>
};

export default PrivateRoute;