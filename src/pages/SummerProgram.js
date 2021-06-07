import { React } from "react";
import { Carousel } from "react-responsive-carousel";
// Corousels
import SCarousel from "../components/SCarousel";
import TechCarousel from "../components/TechCarousel";
import BuCarousel from "../components/BuCarousel";
import LawCarousel from "../components/LawCarousel";
// Icons
import Telescope from "../imgs/Telescope";
import Computer from "../imgs/Computer";
import BuLogo from "../imgs/BuLogo";
import LawLogo from "../imgs/LawLogo";
import {
  plus,
  biomedical,
  gene,
  calculus,
  selfDriving,
  laptop,
  pyLogo,
  pyAuto,
  csLogo,
  android,
  introBu,
  coin,
  conBehavior,
  impact,
  negotiate,
  decision,
  recover,
  capitalism,
  nazism,
  politics,
  spiral,
  law,
} from "../imgs/SummerProgramSvgs";

export const sciMath = [
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
const techCS = [
  {
    svg: pyLogo,
    title: "Intro to python",
  },
  {
    svg: laptop,
    title: "Programming the right way",
  },
  {
    svg: csLogo,
    title: "Intro to ML with Python",
  },
  {
    svg: pyAuto,
    title: "Automate  with python Calculus",
  },
  {
    svg: android,
    title: "Introduction to Andriod Dev.",
  },
  {
    svg: selfDriving,
    title: "Data stuctures + Interview",
  },
];
const BuCo = [
  {
    svg: introBu,
    title: "Intro to Business",
  },
  {
    svg: coin,
    title: "Financial Literacy",
  },
  {
    svg: conBehavior,
    title: "Consumer Behaviour",
  },
  {
    svg: impact,
    title: "Impact Investing",
  },
  {
    svg: negotiate,
    title: "Negotiation 101",
  },
  {
    svg: decision,
    title: "Descision Theory",
  },
  {
    svg: recover,
    title: "Art of Recovery",
  },
];
const LawLiberal = [
  {
    svg: capitalism,
    title: "Rise Of Capitalism",
  },
  {
    svg: nazism,
    title: "Adolf Hitler’s rise to power",
  },
  {
    svg: politics,
    title: "Politics in crisis mgmt.",
  },
  {
    svg: law,
    title: "Intro to LAW",
  },
  {
    svg: spiral,
    title: "Intro to Psychology",
  },
];

const SummerProgram = () => {
  return (
    <div className="mx-auto lg:w-4/5 lg:py-12 md:px-0">
      <div className="px-5 mb-9 md:px-0">
        <h1
          style={{ fontSize: "clamp(1.75rem, 5vw, 46px)" }}
          className="font-extrabold mb-7"
        >
          Summer Programmes
        </h1>
        <div className="w-[70%] space-y-5">
          <p>
            Brooks Brainery is a student led global edtech organisation made to
            provide free, educational oppourtunities to high school students. We
            are organising first in class global, remote Summer Program for high
            schoolers, which is completely free for students to attend!
          </p>
          <p>
            This is a four week program running from mid June to mid-July.
            Summer programs will have assignments, lectures, projects and hands
            on creative modules.
          </p>
          <p>
            So Far, 15+ countrie are being represented in the program. Our
            course instructors are from Yale, Stanford, UC berkly, CArnegie
            Mellon, John Hopkins, University of Toranto - the names go on !
          </p>
          <p>
            Our list also includes Interns and employees at Apple, Google,
            Facebook and Goldman Sachs.
          </p>
          <p>Our course list is dividedd in STEM, LAW and ARTS categories.</p>
        </div>
      </div>
      <div className="">
        {/*      Science & Maths      */}
        <div className="mt-[2.5rem] px-6 md:flex justify-center items-center md:justify-around py-2">
          <div className="flex flex-row-reverse justify-center md:flex-col md:space-y-5">
            <div className="flex justify-end md:justify-center">
              {Telescope}
            </div>
            <h2
              style={{ fontSize: "clamp(1.4rem, 5vw, 35px)" }}
              className="font-semibold text-center uppercase"
            >
              Science &<br />
              Maths
            </h2>
          </div>
          <div className="mt-[2rem] md:w-5/12">
            <Carousel interval="20000" emulateTouch="true">
              {sciMath.map(({ svg, title }, i) => (
                <SCarousel path={`course/sci/${i}`} svg={svg} title={title} />
              ))}
            </Carousel>
          </div>
        </div>

        {/*      Tech & CS      */}
        <div className="mt-[2.5rem] px-6 md:flex justify-center items-center md:justify-around py-2">
          <div className="flex flex-row-reverse justify-center md:flex-col md:space-y-5">
            <div className="flex justify-end md:justify-center">{Computer}</div>
            <h2
              style={{ fontSize: "clamp(1.4rem, 5vw, 35px)" }}
              className="font-semibold text-center uppercase"
            >
              Tech & CS
            </h2>
          </div>
          <div className="mt-[2rem] md:w-5/12">
            <Carousel interval="20000" emulateTouch="true">
              {techCS.map(({ svg, title }, i) => (
                <TechCarousel path={`course/cs/${i}`} svg={svg} title={title} />
              ))}
            </Carousel>
          </div>
        </div>

        {/*      Business & Commerce      */}
        <div className="mt-[2.5rem] px-6 md:flex justify-center items-center md:justify-around py-2">
          <div className="flex flex-row-reverse justify-center md:flex-col md:space-y-5">
            <div className="flex justify-end md:justify-center">{BuLogo}</div>
            <h2
              style={{ fontSize: "clamp(1.4rem, 5vw, 35px)" }}
              className="font-semibold text-center uppercase"
            >
              Business &<br />
              commerce
            </h2>
          </div>
          <div className="mt-[2rem] md:w-5/12">
            <Carousel interval="20000" emulateTouch="true">
              {BuCo.map(({ svg, title }, i) => (
                <BuCarousel
                  path={`course/commerce/${i}`}
                  svg={svg}
                  title={title}
                />
              ))}
            </Carousel>
          </div>
        </div>

        {/*      Law & Liberal Arts      */}
        <div className="mt-[2.5rem] px-6 md:flex justify-center items-center md:justify-around py-2">
          <div className="flex flex-row-reverse justify-center md:flex-col md:space-y-5">
            <div className="flex justify-end md:justify-center">{LawLogo}</div>
            <h2
              style={{ fontSize: "clamp(1.4rem, 5vw, 35px)" }}
              className="font-semibold text-center uppercase"
            >
              Law &<br />
              Liberal Arts
            </h2>
          </div>
          <div className="mt-[2rem] md:w-5/12">
            <Carousel interval="20000" emulateTouch="true">
              {LawLiberal.map(({ svg, title }, i) => (
                <LawCarousel path={`course/law/${i}`} svg={svg} title={title} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerProgram;
