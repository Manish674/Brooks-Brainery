import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ open }) => {
  const transalteValue = open ? "translate-x-[100vw]" : "";
  return (
    <div className="flex justify-end">
      <div
        className={`max-w-[304px] items-center text-center font-semibold  transform ${transalteValue} flex flex-col transition duration-[500ms] absolute w-[90%] h-screen bg-[white] text-black`}
      >
        <div className="w-4/5 p-4 border-b border-[black]">
          <Link to="/">Home</Link>
        </div>
        <div className="w-4/5 p-4 border-b  border-[black]">
          <Link to="/summer-program">
            Summer <br />
            Programm
          </Link>
        </div>
        <div className="w-4/5 p-4 border-b border-[black] ">
          <Link to="">Volunteer</Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
