import React from 'react';
import { Link } from 'react-router';

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value
    console.log(name, photo, email, password);
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 px-2">
        <h2 className='text-3xl font-semibold text-center'>Register your Account</h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text"
              name='name'
              className="input"
              placeholder="Name" 
              required
              />

            {/* photo url */}
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL" required/>

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required/> 

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required/>

            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className='text-accent font-semibold text-center py-5'>Already Have An Account ? <Link to="/auth/login" className='text-red-400'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;