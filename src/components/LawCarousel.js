import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const LawCarousel = ({ svg, title, path }) => {
  return (
    <div className="max-w-[25rem] max-h-[25rem] h-[17rem] flex flex-col space-y-[1rem] items-center justify-center bg-[#C65353] text-black md:ml-9">
      <div className="mt-[1rem] w-17 h-16 flex justify-center">{svg}</div>
      <div className="flex items-center justify-center">
        <h2 className="text-[1.2rem] font-semibold px-8">{title}</h2>
        <div>
          <Link to={path}>
            <BiRightArrowAlt className="mr-[1rem] cursor-pointer text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawCarousel;
