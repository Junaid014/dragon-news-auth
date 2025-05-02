import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 font-medium text-accent py-6 justify-start  join-item">
            <FaFacebook size={22} className="text-blue-400 mr-2"></FaFacebook> Facebook
          </button>
          <button className="btn font-medium text-accent bg-base-100 py-6 justify-start join-item">
            <FaTwitter size={22} className="text-blue-400 mr-2"></FaTwitter> Twitter
          </button>
          <button className="btn bg-base-100 font-medium text-accent py-6 justify-start join-item">
            <FaInstagram size={22} className="text-red-300 mr-2"></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;