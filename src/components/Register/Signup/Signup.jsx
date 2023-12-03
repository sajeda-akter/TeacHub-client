import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Signup = () => {
  const {createUser,googleSignin,githubSignin,userUpdate}=useContext(AuthContext)
  const [errorpassword,setErrorPassword]=useState()
  const navigate=useNavigate()
  const location=useLocation()
  
  const handleSignup=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    // const photoURL=e.target.PhotoURL.value;
    
    const email=e.target.email.value;
    const password=e.target.password.value;
    
    // display password error
    if(password.length<7){
      setErrorPassword("The password is less than 6 characters.")
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setErrorPassword("The password don't have a capital letter")
      return;
    }
    else if(!/[-+_!@#$%^&*., ?]/.test(password)){
      setErrorPassword("The password  don't have a special character      ")
     return
    }

    setErrorPassword("")

    createUser(email,password)
    .then(result=>{
      console.log(result.user)

      userUpdate(name)
      .then(()=>{
          navigate(location?.state ? location.state:'/')
          Swal.fire("Successfully user created!");
      })

    })
    .catch(err=>console.log(err))

    // goggleSignin
   

      // reset form
      e.target.email.value=""
      e.target.password.value="";
      e.target.name.value="";

  }
  const handleGoogle=()=>{
    googleSignin()
    .then(result=>{
      console.log(result.user)
    })
  }

  const handleGithub=()=>{
    githubSignin()
    .then(result=>{
      console.log(result.user)
    })
  }
  return (
    <div
      className="bg-no-repeat bg-center bg-cover max-w-7xl mx-auto px-5 py-12 rounded mt-4 max-h-screen"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1500614264/photo/cyber-security-internet-and-personal-online-systems-high-security-login-screen-concept.jpg?s=612x612&w=0&k=20&c=bbpXbjtZNNERzV8JMMqyHneQjAR9E3GLHFrnRjUKBEY=)",
      }}
    >
      <div className="card  max-w-xs lg:max-w-md mx-auto mt-12 shadow-2xl bg-base-100">
        <h1 className="bg-indigo-900 text-white text-center py-6 text-2xl font-bold  underline-4  rounded-t-2xl ">
       Signup
        </h1>
        <form className="card-body " onSubmit={handleSignup}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="py-4 outline-none border-b-2 border-indigo-800"
           
            />
          </div>
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="PhotoURL"
              name="PhotoURL"
              className="py-4 outline-none border-b-2 border-indigo-800"
           
            />
          </div> */}
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="py-4 outline-none border-b-2 border-indigo-800"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="py-4 outline-none border-b-2 border-indigo-800"
              required
            />
                    <span className="text-red-600 font-semibold">{errorpassword}</span>

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Signup</button>
          </div>
          <p>Do you have a account? <span className="ml-3 text-indigo-600"><Link to='/login'>Login</Link></span></p>
          <div className="divider">OR</div>
          <p className="text-center font-medium">Login with social media</p>
          <div className="flex justify-around items-center mt-4">
            <span>
              <img
              onClick={handleGoogle}
                src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlfGVufDB8fDB8fHww"
                className="w-16 h-10 rounded border-2 border-indigo-800 p-1"
                alt=""
              />
            </span>

            <span>
              <img
              onClick={handleGithub}
                src="data:image/png;base64,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"
                className="w-16 h-10 rounded border-2 border-indigo-800 p-1"
                alt=""
              />
            </span>
         
          </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;

