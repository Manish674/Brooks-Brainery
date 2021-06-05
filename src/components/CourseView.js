import React from "react";
import { coursePlus } from "../imgs/SummerProgramSvgs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Telescope from "../imgs/Telescope";
import bg from "../assets/bg.jpg";

const CourseView = () => {
  return (
    <div className="w-4/5 mx-auto ">
      <img className="max-w-[276px] w-[50%] mx-auto mb-[4rem]" src={bg} />
      <div className="flex justify-around mx-auto ">
        <div className="flex flex-col justify-between ">
          <h1 style={{ fontSize: "clamp(1.3rem, 4vw + 1rem, 40px)" }}>
            Medical <br />
            Startups
          </h1>
          <div className="bg-[#ffe5f2] text-center text-black">
            <h1 className="m-[0.4rem]">101 SC</h1>
          </div>
        </div>
        <div className="w-[40%] max-w-[267px]">{coursePlus}</div>
      </div>
      <div className="lg:w-[60%] lg:ml-auto  mt-[3rem] ">
        <div className="">
          <div className="flex ">
            <GiPlagueDoctorProfile className="text-4xl mr-[2.5rem]" />
            <h3 className="text-[1.74rem]">Tutor</h3>
          </div>
          <div className="p-[0.5rem] bg-[#ffe5f2] text-black">
            <h3>full name</h3>
            <h3>Qualification ( Major, University) </h3>
          </div>
        </div>
      </div>
      <div className="mt-[3rem]">
        <h3 className="text-2xl">CURRICULUM</h3>
        <div className="bg-[#ffe5f2] text-black p-[0.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          consequuntur iste ullam quos aut, repudiandae consequatur deleniti
          vitae, corporis iusto delectus quo, pariatur dolorem. Consequatur.
        </div>
      </div>
    </div>
  );
};

export default CourseView;
