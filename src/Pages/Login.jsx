import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
const {LoginUser}=use(AuthContext);
const navigate =useNavigate();
const location=useLocation();
console.log(location);

const [errorM,setErrorM]=useState("");

  const handleLogin=e=>{
    e.preventDefault();
    const form=e.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email,password);

    // Log in user
    LoginUser(email,password)
    .then(result=>{
      toast.success('Logged in successful')
      navigate(`${location.state? location.state : "/"}`)
      
    })
    .catch((error) => {
      const errorCode = error.code;
    
      let message = "Something went wrong. Please try again.";
    
      if (errorCode === "auth/invalid-credential" || errorCode === "auth/user-not-found") {
        message = "Invalid email or password.";
      } else if (errorCode === "auth/wrong-password") {
        message = "Wrong password. Please try again.";
      } else if (errorCode === "auth/too-many-requests") {
        message = "Too many attempts. Please wait and try again later.";
      }
    
      setErrorM(message);
      // setErrorM("Invalid email or password.");

      // toast.error(message); 
    });
  }

    return (
        <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 px-2">
                <h2 className='text-3xl font-semibold text-center'>Login your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>

          {
            errorM && <p className='text-red-400 text-xs'>{errorM}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='text-accent font-semibold text-center py-5'>Dont’t Have An Account ? <Link to="/auth/register" className='text-red-400'>Register</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;