import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import ButtonLink from "./ui/button";

const HomeContent = ({ currentStage, isDisplay, setCurrentStage }) => {
  if (currentStage === 1) {
    // tangan
    return (
      <div className="flex flex-col gap-5 md:w-2/3">
        <h1 className="text-center text-base md:text-lg">
        As we believe peoples are the most essential part to produce appropriate technology for a brighter future, we are enthusiastic to encourage them to improve their skills in technology
        </h1>
        <ButtonLink to={"/about"} className="bg-white text-black w-full">
          visit -{">"}
        </ButtonLink>
      </div>
    );
  }
  if (currentStage === 2) {
    // roket
    return (
      <div className="flex flex-col gap-5 md:w-2/3">
        <h1 className="text-center text-base md:text-lg">
        We understand Technology is an important part of our society and will deliver us to a brighter future. 
        But in the meantime, we also realized human is the most crucial part to encourage technology and make a brighter future for the world.
        </h1>
        <ButtonLink to={"/about"} className="bg-white text-black w-full">
          visit -{">"}
        </ButtonLink>
      </div>
    );
  }
  if (currentStage === 3) {
    // puzzle
    return (
      <div className="flex flex-col gap-5 md:w-2/3">
        <h1 className="text-center text-base md:text-lg">
          We are able to assist our partners to achieve their digital
          transformation goals with the righteous technology solution their need
        </h1>
        <ButtonLink to={"/portfolio"} className="bg-white text-black w-full">
          visit -{">"}
        </ButtonLink>
      </div>
    );
  }
  if (currentStage === 4) {
    // rumah
    return (
      <div className="flex flex-col gap-5 md:w-2/3">
        <h1 className="text-center text-base md:text-lg">
          We have a great desire to produce innovative technology that will able
          to improve society and encourage our partners with emerging technology
          and proper toward their goals
        </h1>
        <ButtonLink to={"/about"} className="bg-white text-black w-full">
          visit -{">"}
        </ButtonLink>
      </div>
    );
  }
};

export default HomeContent;
