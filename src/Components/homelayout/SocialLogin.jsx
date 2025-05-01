import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold mb-5"> Login With</h2>
            <div className='space-y-2.5'>
                <button className='w-full btn btn-outline btn-secondary'>
                <FcGoogle size={22}/>  Login With Google</button>
                <button className='w-full btn btn-outline btn-primary'>
                <FaGithub size={22} />Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;