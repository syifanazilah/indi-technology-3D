import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const Loader = ({ progress ,...props }) => {
  const [isFinished, setIsFinished] = useState(false);

  const floor = Math.floor(progress);

  useEffect(() => {
    if (floor === 100 && !isFinished) {
      setIsFinished(true);
    }
  }, [floor, isFinished]);

  return (
    <Html>
      <div className="text-3xl absolute z-20 w-screen h-screen flex justify-center items-center">
        <p className="font-medium font-poppins">loading {floor}%</p>
      </div>
    </Html>
  );
};

export default Loader;
