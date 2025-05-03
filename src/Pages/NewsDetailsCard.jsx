import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  //   console.log(news);
  return (
    <div className="space-y-5 border border-[#E7E7E7] px-4 pt-5 pb-8">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl text-[#403F3F]">{news.title}</h2>

      <p className="text-[#706F6F]">{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
      <FaArrowLeft />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;