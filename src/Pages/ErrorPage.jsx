import React from 'react';
import { NavLink } from 'react-router';
import error from "../assets/error.jpg"

const ErrorPage = () => {
    return (
        <div>
            
            <div className='bg-[#2e0e4d] w-full min-h-screen sm:min-h-[800px] flex flex-col items-center justify-center'>
            <img className='h-80 w-96' src={error} alt="" />
            <h1 className='text-5xl font-bold text-white'>404 - Page Not Found</h1>
            <p className='text-white font-semibold mt-3'>The Page you are looking for doesn't exist</p>
            <NavLink className="border-[#2e0e4d] mt-4 font-semibold btn text-[#2e0e4d]">Go Back To HomePage</NavLink>
        </div>
        </div>
    );
};

export default ErrorPage;