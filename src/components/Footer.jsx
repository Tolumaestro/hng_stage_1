import React from "react";
import zuri from "../assets/Zuri.Internship_Logo.png";
import i4g from "../assets/I4G.png";

const Footer = () => {
  return (
    <div className="xl:container mx-4 xl:mx-auto mt-16 md:mt-24 py-12 border-t flex flex-col md:flex-row justify-between gap-y-4">
      <img src={zuri} alt="" className="w-32" />
      <p className=" text-gray-500 text-sm md:text-base">
        HNG Internship 9 Frontend Task
      </p>
      <img src={i4g} alt="" className="w-32" />
    </div>
  );
};

export default Footer;
