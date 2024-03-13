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
extend({ OrbitControls });

const Scene = ({ setCurrentStage }) => {
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
    const cameraPosition = cameraRef.current.position;

    if (
      cameraPosition.x >= -25 &&
      cameraPosition.x <= 10 &&
      cameraPosition.z >= -45 &&
      cameraPosition.z <= -30
    ) {
      setCurrentStage(1);
    } else if (
      cameraPosition.x >= -40 &&
      cameraPosition.x <= -20 &&
      cameraPosition.z >= 5 &&
      cameraPosition.z <= 25
    ) {
      setCurrentStage(2);
    } else if (cameraPosition.x >= -10 && cameraPosition.x <= 10) {
      setCurrentStage(3);
    } else if (
      cameraPosition.z >= -5 &&
      cameraPosition.z <= 15 &&
      cameraPosition.x >= 35
    ) {
      setCurrentStage(4);
    } else {
      setCurrentStage(null);
    }
  });

  useHelper(lightRef, DirectionalLightHelper, 0.5);

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
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <div className="overflow-y-hidden">
      {/* <Greeting /> */}
      {currentStage && (
        <div className="absolute top-20 left-1/2 flex items-center justify-center text-3xl -translate-x-1/2 w-[500px] h-[200px] bg-red-500/40 z-10">
          <HomeContent currentStage={currentStage} />
        </div>
      )}

      <Canvas className="w-full min-h-screen" camera={{ manual: true }}>
        <Suspense>
          <Scene setCurrentStage={setCurrentStage} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
