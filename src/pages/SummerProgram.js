import React from "react";
import SCarousel from "../components/SCarousel";
import Telescope from "../imgs/Telescope";
import { Carousel } from "react-responsive-carousel";
import {
  plus,
  biomedical,
  gene,
  calculus,
  selfDriving,
} from "../imgs/SummerProgramSvgs";

const sciMath = [
  {
    svg: plus,
    title: "Medical Startups",
  },
  {
    svg: biomedical,
    title: "Biomedical Engineering",
  },
  {
    svg: gene,
    title: "Gene editing",
  },
  {
    svg: calculus,
    title: "Calculus",
  },
  {
    svg: selfDriving,
    title: "Self Driving Vehicles ",
  },
];

const SummerProgram = () => {
  return (
    <div className="">
      <h1
        style={{ fontSize: "clamp(1.75rem, 5vw, 46px)" }}
        className="font-bold w-[45%]"
      >
        Summer Programmes
      </h1>
      <div className="border mt-[2.5rem]">
        <div className="flex items-center justify-between">
          <span
            style={{ fontSize: "clamp(1.4rem, 5vw, 35px)" }}
            className="font-semibold"
          >
            <h2>Science &</h2>
            <h2>Maths</h2>
          </span>
          <div className="w-[40%]">{Telescope}</div>
        </div>
        <div className="mt-[2rem]">
          <Carousel emulateTouch="true">
            {sciMath.map(({ svg, title }) => (
              <SCarousel svg={svg} title={title} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SummerProgram;
