import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shered/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signInUser} =useContext(AuthContext)
  const location = useLocation()
  const Navigate = useNavigate()

  const handelLogin =(e)=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password);
    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      e.target.reset()

      Navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error);
    })
  }


    return (
        <div className="py-5">
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please login </h2>
            <form onSubmit={handelLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center "> Do not have an account <Link className="text-red-500 underline" to='/register'>Register</Link></p>


            
        </div>
    );
};

export default Login;