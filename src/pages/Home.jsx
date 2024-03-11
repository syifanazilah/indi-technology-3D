import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Island from "../components/models/Island";
import Rumah from "../components/models/home";
import Puzzle from "../components/models/puzzle";
import Tangan from "../components/models/tangan";
import RumahAsap from "../components/models/rumahasap";
import Rocket from "../components/models/rocket";
extend({ OrbitControls });

const Scene = () => {
  const cameraRef = useRef();
  const objectRef = useRef();

  useFrame((state, delta, frame) => {
    const { position } = objectRef.current;

  });

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  return (
    <>
      <PerspectiveCamera position={[0, 15, -40]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={5} />
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={1}
        maxDistance={60}
        minDistance={40}
      />
      <group ref={objectRef}>
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
  return (
    <div className="overflow-y-hidden">
      {/* <Greeting /> */}

      <Canvas className="w-full min-h-screen" camera={{ manual: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
