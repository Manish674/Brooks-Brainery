import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BuCarousel = ({ svg, title, path }) => {
  return (
    <div className="max-w-[25rem] max-h-[25rem] h-[17rem] flex flex-col space-y-[1rem] items-center justify-center bg-[#FFD480] text-black md:ml-9">
      <div className="mt-[1rem] w-17 h-16 flex justify-center">{svg}</div>
      <div className="flex  items-center justify-center">
        <h2 className="text-[1.2rem] font-semibold px-8">{title}</h2>
        <div className="">
          <Link to={path}>
            <BiRightArrowAlt className="text-3xl mr-[1rem] cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuCarousel;
