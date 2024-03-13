import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Island from "../components/models/Island";
import Rumah from "../components/models/home";
import Puzzle from "../components/models/puzzle";
import Tangan from "../components/models/tangan";
import RumahAsap from "../components/models/rumahasap";
import Rocket from "../components/models/rocket";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";
import HomeContent from "../components/HomeContent";
import Greeting from "./Greeting";
extend({ OrbitControls });

const Scene = ({ setCurrentStage, setIsDisplay }) => {
  const cameraRef = useRef();
  const objectRef = useRef();
  const lightRef = useRef();

  // const {rotation} = useControls({
  //   rotation: {
  //     value: 0,
  //     min: 0,
  //     max: Math.PI
  //   }
  // })

  useFrame((state, delta, frame) => {
    const { x, z } = cameraRef.current.position;

    const posisiRumah = x >= -25 && x <= 10 && z >= -45 && z <= -30;
    const posisiRoket = x >= -40 && x <= -20 && z >= 5 && z <= 25;
    const posisiPuzzle = z >= -5 && z <= 15 && x >= 35;
    const posisiTangan = x >= -10 && x <= 10;

    switch (true) {
      case posisiRumah:
        setCurrentStage(1);
        setIsDisplay(true);
        break;
      case posisiRoket:
        setCurrentStage(2);
        setIsDisplay(true);

        break;
      case posisiTangan:
        setCurrentStage(3);
        setIsDisplay(true);

        break;
      case posisiPuzzle:
        setCurrentStage(4);
        setIsDisplay(true);

        break;
      default:
        setIsDisplay(false);
        break;
    }
  });

  // useHelper(lightRef, DirectionalLightHelper, 0.5);

  return (
    <>
      <PerspectiveCamera position={[0, 10, -40]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={1.5} />
      <directionalLight
        scale={2}
        position={[10, 20, 100]}
        intensity={5}
        ref={lightRef}
      />
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={1.4}
        minPolarAngle={1.3}
        maxDistance={60}
        minDistance={40}
        enableDamping
      />
      {/* object 3D */}
      <group ref={objectRef} position={[0, -5, 0]} rotation={[0, 3.03, 0]}>
        <Rocket />
        <Tangan />
        <Puzzle />
        <Rumah />
        <RumahAsap />
        <Island />
      </group>
    </>
  );
};

const Home = () => {
  const [currentStage, setCurrentStage] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="overflow-y-hidden">
      {/* <Greeting />*/}
      <div
        style={{ userSelect: "none" }}
        className={`${isDisplay ? "home-content" : "home-content-hidden"} transition absolute top-20 left-1/2 flex items-center justify-center text-3xl -translate-x-1/2 w-[500px] h-[200px]  z-10`}>
        <HomeContent currentStage={currentStage} isDisplay={isDisplay} />
      </div>

      <Canvas className="w-full min-h-screen" camera={{ manual: true }}>
        <Suspense>
          <Scene
            setCurrentStage={setCurrentStage}
            setIsDisplay={setIsDisplay}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
