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
extend({ OrbitControls });

const Scene = () => {
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

  useFrame((state, delta, frame) => {});

  useHelper(lightRef, DirectionalLightHelper, 0.5);

  return (
    <>
      <PerspectiveCamera position={[0, 15, -40]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={1} />
      <directionalLight
        scale={2}
        position={[10, 20, 100]}
        intensity={6}
        ref={lightRef}
      />
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={1}
        maxDistance={60}
        minDistance={40}
      />
      {/* object 3D */}
      <group ref={objectRef} rotation={[0, 3.03, 0]}>
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
