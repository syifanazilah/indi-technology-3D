import { useEffect, useState } from "react";

const HomeContent = ({ currentStage, isDisplay, setCurrentStage }) => {


  if (currentStage === 1) {
    return (
      <div className={`${isDisplay ? "home-content" : "home-content-hidden"}`}>
        <h1>{currentStage}</h1>
      </div>
    );
  }
  if (currentStage === 2) {
    return (
      <div className={`${isDisplay ? "home-content" : "home-content-hidden"}`}>
        <h1>{currentStage}</h1>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className={`${isDisplay ? "home-content" : "home-content-hidden"}`}>
        <h1>{currentStage}</h1>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className={`${isDisplay ? "home-content" : "home-content-hidden"}`}>
        <h1>{currentStage}</h1>
      </div>
    );
  }
};

export default HomeContent;
