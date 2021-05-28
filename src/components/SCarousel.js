import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const SCarousel = ({ svg, title }) => {
  return (
    <div className="max-w-[35rem] flex flex-col space-y-[1rem] items-center bg-[yellow] text-black w-4/5 ml-3">
      <div className="mt-[1rem] flex justify-center">{svg}</div>
      <h2 className="text-[1.2rem] font-semibold px-8">{title}</h2>
      <div className="flex justify-end w-4/5 mx-auto">
        <BiRightArrowAlt className="text-3xl mb-[1rem]" />
      </div>
    </div>
  );
};

export default SCarousel;
