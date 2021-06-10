import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ open }) => {
  const transalteValue = open ? "translate-x-[100vw]" : "";
  return (
    <div className="flex justify-end">
      <div
        className={`items-center text-center font-semibold  transform ${transalteValue} flex flex-col transition duration-[500ms] absolute w-[90%] h-screen bg-[black]`}
      >
        <div className="w-4/5 p-4 border-b">
          <Link>Home</Link>
        </div>
        <div className="p-4 w-4/5 border-b">
          <Link>
            Summer <br />
            Programm
          </Link>
        </div>
        <div className="w-4/5 p-4 border-b">
          <Link>Volunteer</Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
