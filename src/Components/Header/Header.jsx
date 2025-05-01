import React from 'react';
import logo from "../../assets/logo.png";
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-3">
        <div className="logo">
          <img className="" src={logo} alt="" />
        </div>
        <h2 className="text-accent ">Journalism Without Fear or Favour</h2>
        <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM ,yyyy")}</p>
      </div>
    );
};

export default Header;