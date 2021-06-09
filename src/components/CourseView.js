import React from "react";
import { Calender, Duration } from "../imgs/SummerProgramSvgs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import bg from "../assets/bg.jpg";
import courseData from "../assets/courseData";
import { useParams } from "react-router-dom";

const CourseView = () => {
  const { sub, course } = useParams();
  const { author, curriculum, qualification, title } = courseData[sub][course];
  const { svg } = courseData[sub];
  return (
    <div className="w-4/5 mx-auto ">
      <img
        className="max-w-[276px] w-[50%] mx-auto mb-[4rem]"
        src={bg}
        alt="bg"
      />
      <div className="flex justify-around mx-auto md:justify-between ">
        <div className="w-[60%] max-w-[448px] flex flex-col justify-between ">
          <h1
            className=""
            style={{ fontSize: "clamp(1.3rem, 4vw + 1rem, 40px)" }}
          >
            {title}
          </h1>
          <div className="bg-[#ffe5f2] text-center text-black">
            <h1 className="m-[0.4rem]">101 SC</h1>
          </div>
        </div>
        <div className="w-[40%] flex justify-center itmes-center ml-[1rem] bg-[yellow] flex items-center max-w-[267px]">
          {/*coursePlus*/}
          {svg}
        </div>
      </div>
      <div className="lg:w-[60%] lg:ml-auto  mt-[3rem] ">
        <div className="">
          <div className="flex ">
            <GiPlagueDoctorProfile className="text-4xl mr-[2.5rem]" />
            <h3 className="text-[1.74rem]">Tutor</h3>
          </div>
          <div className="lg:flex lg:justify-between p-[0.5rem] bg-[#ffe5f2] text-black">
            <h3>{author}</h3>
            <h3>{qualification}</h3>
          </div>
        </div>
      </div>
      <div className="mt-[3rem]">
        <h3 className="text-2xl">CURRICULUM</h3>
        <div className="bg-[#ffe5f2] text-black p-[0.5rem]">
          <p className="md:w-[60%]">{curriculum}</p>
        </div>
      </div>
      <div className="mt-[4rem] lg:flex lg:justify-between lg:items-center">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-[2rem] lg:w-max">
            <div className="md:text-4xl text-2xl  lg:mr-[12rem] font-bold">
              <h1>DURATION</h1>
              <h2>4 WEEKS</h2>
            </div>
            <div className="w-[40%] max-w-[186px]">{Duration}</div>
          </div>
          <div className="flex justify-between mt-12 lg:w-max">
            <div className="text-2xl md:text-4xl lg:mr-[12rem] font-bold">
              <h1>MID JUNE</h1>
              <h2>MID JULY</h2>
            </div>
            <div className="w-[40%] max-w-[186px]">{Calender}</div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-[3rem]">
          <button className="lg:w-[13rem]  mb-8  bg-[#8ED100] mt-4  p-4 px-auto rounded-full w-[9rem] text-black font-bold">
            <a href="https://tinyurl.com/BBSP2021">Enroll</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
