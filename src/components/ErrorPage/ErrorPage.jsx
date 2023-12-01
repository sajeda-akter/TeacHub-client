import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img className="10/12 mx-auto" src="https://img.lovepik.com/photo/45007/5344.jpg_wh860.jpg" alt="" />
            <Link to='/'><p className="text-2xl border-2 border-red-600 w-56 rounded-md p-2 mx-auto">Go To Home Page</p></Link>
        </div>
    );
};

export default ErrorPage;