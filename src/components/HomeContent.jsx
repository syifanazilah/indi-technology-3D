import { useEffect, useState } from "react";

const HomeContent = ({ currentStage, isDisplay, setCurrentStage }) => {
  if (currentStage === 1) {
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
    return (
      <div>
        <h1 className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          laborum porro optio deleniti earum quisquam ducimus nulla quo
          voluptatem, impedit officiis eius consectetur sed quos! Amet
          blanditiis saepe iste possimus!
        </h1>
      </div>
    );
  }
  if (currentStage === 4) {
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
