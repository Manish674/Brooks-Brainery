import React from "react";
import freelabel from "../imgs/freelabel.png";
import menstack from "../imgs/menstack.png";
import emoji from "../imgs/Emoji";
import TestPaper from "../imgs/Testpaper";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full mx-auto lg:flex-row lg:w-4/5 lg:space-x-12 space-y-8">
        <img src={menstack} alt="menStack" className="lg:w-1/2 lg:order-last" />
        <div className="flex flex-col w-4/5 lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Brooks Brainery</h3>
          <p className="text-lg lg:max-w-md">
            is a non-profit organization led by teenagers whose sole purpose is
            to provide opportunities free of cost to other teenagers.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mx-auto mt-12 lg:flex-row lg:w-4/5 lg:justify-around space-x-4 space-y-4 ">
        <img
          src={freelabel}
          atl="freelable"
          className="w-4/5 max-w-sm  lg:order-first "
        />
        <div className="flex flex-col w-4/5 lg:w-auto space-y-4">
          <h3 className="text-3xl font-bold">Freebie</h3>
          <p className="text-lg lg:max-w-md">
            We strive to provide a self-sufficient platform to high schoolers,
            by fellow high schoolers, and bring the best possible resources and
            services, completely free of cost.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mx-auto mt-12 mb-12 lg:justify-around lg:flex-row lg:w-4/5 space-y-8 ">
        <span className="relative flex items-center justify-start max-w-sm mb-8 w-80 h-96 lg:order-last">
          <TestPaper />
        </span>
        <div className="flex flex-col w-4/5 lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Get ready for college</h3>
          <p className="text-lg lg:max-w-md">
            We are focused on creating a conducive environment for college
            preparation and applications.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mx-auto mt-12 lg:justify-around lg:flex-row lg:w-4/5 lg:space-x-12 space-y-8 ">
        <span className="w-4/5 max-w-sm mx-auto">{emoji}</span>
        <div className="flex flex-col w-4/5 space-y-4 lg:w-1/2">
          <h3 className="text-3xl font-bold">Your personal teacher friend</h3>
          <p className="text-lg lg:max-w-md">
            We are also working towards introducing specific courses for the
            standardized tests, and one-on-one live tutoring to master any
            particular topic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
