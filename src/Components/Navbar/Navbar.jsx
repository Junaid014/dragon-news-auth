import React from 'react';
import btn_logo from "../../assets/user.png"
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'> Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career"> Career</NavLink>
            </div>
            <div className="nav-btn flex gap-3 items-center">
                <img src={btn_logo} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
            
        </div>
    );
};

export default Navbar;