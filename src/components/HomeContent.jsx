import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import ButtonLink from "./ui/button";

const HomeContent = ({ currentStage, isDisplay, setCurrentStage }) => {
  if (currentStage === 1) {
    // roket
    return (
      <div>
        <h1 className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem
          mollitia, in consectetur nobis eius, illo sint inventore vel, minima
          natus tempora iste numquam officia! Enim sapiente magnam fuga
          provident.
        </h1>
      </div>
    );
  }
  if (currentStage === 2) {
    // tangan
    return (
      <div>
        <h1 className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          distinctio aliquam tempore minima, quo unde odit animi vel quidem
          perspiciatis quam veniam accusantium ipsa earum excepturi tenetur
          voluptatum blanditiis quas!
        </h1>
      </div>
    );
  }
  if (currentStage === 3) {
    // puzzle
    return (
      <div className="flex flex-col gap-5 md:w-2/3">
        <h1 className="text-center text-lg">
          We are able to assist our partners to achieve their digital
          transformation goals with the righteous technology solution their need
        </h1>
        <ButtonLink to={'/portfolio'} className="bg-white text-black w-full">visit -{">"}</ButtonLink>
      </div>
    );
  }
  if (currentStage === 4) {
    // rumah
    return (
      <div>
        <h1 className="text-center text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quod
          sapiente similique id illum voluptatibus quidem? Dicta perferendis
          numquam, accusamus rem sed voluptate amet tempora magnam impedit,
          possimus atque neque!
        </h1>
      </div>
    );
  }
};

export default HomeContent;
