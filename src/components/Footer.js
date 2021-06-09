import React from "react";
import bg from "../assets/bg.jpg";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto mt-20 lg:flex-row lg:w-4/5">
        <img
          className="w-40 mx-auto lg:max-w-sm lg:object-fill lg:w-2/4"
          src={bg}
          alt="bg"
        />
        <div className="flex justify-center space-x-4 lg:w-3/5">
          <div className="flex flex-col items-center w-1/2 text-center lg:justify-around lg:items-center lg:flex-row ">
            <ul className="">
              <li>
                <Link to="" className="hover:underline ">
                  About us
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="" className="hover:underline">
                  Summer Program
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Tutoring
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-around w-1/2 lg:justify-start">
            <div className="flex justify-around w-full max-w-sm text-2xl lg:mb-3 lg:w-4/5 lg:mx-auto ">
              <span className="p-2 rounded-full hover:bg-transi">
                <FiInstagram className="cursor-pointer " />
              </span>
              <span className="p-2 rounded-full hover:bg-transi">
                <FiFacebook className="cursor-pointer" />
              </span>
              <span className="p-2 rounded-full hover:bg-transi">
                <FiLinkedin className="cursor-pointer" />
              </span>
            </div>
            <ul>
              <li>
                <Link to="" className="hover:underline text-redi">
                  Become a student
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline text-greeni">
                  Voluteer as student
                </Link>
              </li>
              <li>
                <Link to="/join-bb" className="hover:underline text-bluei">
                  Join BB team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mx-auto mt-4 mb-4 lg:flex-row lg:w-4/5">
        <ul className="flex flex-row justify-around w-full mt-2 lg:max-w-2xl ">
          <li>
            <Link to="/cookie-policy" className="hover:underline">
              Cookie policy
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link to="/termsofservice" className="hover:underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/copyright" className="hover:underline">
              Copyright
            </Link>
          </li>
        </ul>
        <span className="flex justify-center w-full mt-2 lg:justify-end lg:max-w-2xl ">
          <Link to="/copyrigth">
            Copyright © Brooks Brainery. All Rights Reserved.
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
