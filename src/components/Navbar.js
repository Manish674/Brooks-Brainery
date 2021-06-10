import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ open, setOpen }) => {
  return (
    <div className=" flex justify-end">
      <AiOutlineMenu
        className="mt-4 mr-4 text-4xl cursor-pointer"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Navbar;
