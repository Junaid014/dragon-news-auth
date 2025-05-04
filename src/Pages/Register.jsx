import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
  const {createUser}=use(AuthContext)
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setNameError("");
  setEmailError("");
  setPasswordError("");

    const form = e.target;
    const name = form.name.value.trim();
    // use trim to avoid white space
    const photo = form.photo.value;
    const email = form.email.value.trim();
    const password = form.password.value;
    console.log(name, photo, email, password);

     // Validate name
  if (name.length <= 3) {
    setNameError("Name must be more than 3 characters.");
    return;
  }

  // Validate password
  if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters.");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    setPasswordError("Password must contain at least one uppercase letter.");
    return;
  }

    // create user
    createUser(email,password)
    .then(result=>{
      console.log(result.user);
      form.reset()
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/email-already-in-use") {
        setEmailError("This email is already in use.");
      } else {
        setEmailError("Something went wrong. Please try again.");
      }
    });
  
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 px-2">
        <h2 className='text-3xl font-semibold text-center'>Register your Account</h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" required />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

            {/* photo url */}
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL" required />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className='text-accent font-semibold text-center py-5'>
            Already Have An Account? <Link to="/auth/login" className='text-red-400'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Register;