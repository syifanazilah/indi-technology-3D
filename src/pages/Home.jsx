import { OrbitControls, PerspectiveCamera, useHelper, useProgress } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Island from "../components/models/Island";
import Rumah from "../components/models/home";
import Puzzle from "../components/models/puzzle";
import Tangan from "../components/models/tangan";
import RumahAsap from "../components/models/rumahasap";
import Rocket from "../components/models/rocket";
import { DirectionalLightHelper, MOUSE, SpotLightHelper } from "three";
import { useControls } from "leva";
import HomeContent from "../components/HomeContent";
import Greeting from "./Greeting";
import Pohon from "../components/models/pohon";
import Burung from "../components/models/burung";
import Loader from "../components/Loader";
import Burungs from "../components/models/burung";
extend({ OrbitControls });

const Scene = ({ setCurrentStage, setIsDisplay }) => {
  const cameraRef = useRef();
  const objectRef = useRef();
  const lightRef = useRef();
  const spotLightRef = useRef();

  // const { x, y, z, angle, penumbra, intensity } = useControls({
  //   x: {
  //     value: -60,
  //     min: -300,
  //     max: 300,
  //   },
  //   y: {
  //     value: 102,
  //     min: -300,
  //     max: 300,
  //   },
  //   z: {
  //     value: 36,
  //     min: -300,
  //     max: 300,
  //   },
  //   angle: {
  //     value: 0.5,
  //     min: 0,
  //     max: 1,
  //   },
  //   penumbra: {
  //     value: 0.1,
  //     min: 0,
  //     max: 1,
  //   },
  //   intensity: 15000,
  // });

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

  let screenScale;

  if (window.innerWidth < 768) {
    screenScale = -3;
  } else {
    screenScale = -5;
  }

  const positionY = window.innerWidth < 768 ? -3 : -5;

  useHelper(lightRef, DirectionalLightHelper, 1);
  useHelper(spotLightRef, SpotLightHelper, "white");

  return (
    <>
      <PerspectiveCamera position={[0, 10, -40]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={1} />
      <directionalLight
        // castShadow
        scale={3}
        position={[10, 20, 100]}
        // position={[x, y, z]}
        intensity={3}
        ref={lightRef}
      />
      <spotLight
        ref={spotLightRef}
        castShadow
        position={[-60, 102, 36]}
        angle={0.28}
        penumbra={0.23}
        intensity={15000}
        color={"white"}
      />
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={1.4}
        minPolarAngle={1.3}
        maxDistance={45}
        minDistance={40}
        dampingFactor={0.03}
      />
      {/* object 3D */}
      <group
        ref={objectRef}
        position={[0, positionY, 0]}
        rotation={[0, 3.03, 0]}>
        <Rocket />
        <Tangan />
        <Puzzle />
        <Rumah />
        <RumahAsap />
        <Island />
        <Pohon />
        <Burung/>
      </group>
    </>
  );
};

const Home = () => {
  const { progress } = useProgress();
  const [currentStage, setCurrentStage] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="overflow-y-hidden">
      {<Greeting progress={progress} />}
      <div
        style={{ userSelect: "none" }}
        className={`${
          isDisplay ? "home-content" : "home-content-hidden"
        } transition container max-w-screen-md absolute top-24 md:top-40 w-full left-1/2 flex items-center justify-center -translate-x-1/2 z-10`}>
        <HomeContent currentStage={currentStage} isDisplay={isDisplay} />
      </div>
      <Canvas
        className="w-full min-h-screen"
        camera={{ manual: true }}
        shadows={"soft"}>
        <Suspense fallback={<Loader progress={progress}/>}>
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
