import React, { use } from 'react';
import btn_logo from "../../assets/user.png"
import { Link, NavLink,  } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
    const {user,signOutUser}=use(AuthContext)

    const handleSignOut=()=>{
        signOutUser().then(() => {
            toast.success('You signOut Successfully')
            console.log('sign out');
          }).catch((error) => {
            console.log(error);
          }); 
    }
    return (
        <div className='flex justify-between items-center'>
            <div>
                {user && user.email}
            </div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'> Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career"> Career</NavLink>
            </div>
            <div className="nav-btn flex gap-3 items-center">
                <img src={btn_logo} alt="" />
                {
                    user? <button onClick={handleSignOut} className='btn btn-primary px-8'>SignOut</button>: <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
                }
               
            </div>
            
        </div>
    );
};

export default Navbar;