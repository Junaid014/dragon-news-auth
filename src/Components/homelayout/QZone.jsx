import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-semibold text-xl mb-5">QZone</h2>
      <div className="space-y-5">
        <img className="w-full border-2 border-[#E7E7E7] border-dashed" src={swimmingImage} alt="" />
        <img className="w-full border-2 border-[#E7E7E7] border-dashed" src={classImage} alt="" />
        <img className="w-full border-2 border-[#E7E7E7] border-dashed" src={playImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;