import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper, DoubleSide } from "three";
import Rocket from "../components/models/rocket";
import Island from "../components/models/Island";

const Plane = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color={0xffffff} side={DoubleSide} />
    </mesh>
  );
};

const Box = () => {
  return (
    <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0xff0000} />
    </mesh>
  );
};

const Scene = () => {
  const lightREf = useRef();
  useHelper(lightREf, DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      <directionalLight
        ref={lightREf}
        position={[10, 5, 5]}
        intensity={3}
        castShadow
      />
      <ambientLight intensity={0.5} />
      {/* <Box/> */}
      <group rotation={[0, -.9, 0]}>
        <Rocket scale={0.3} />
        <Island scale={0.3} />
      </group>
      {/* <Plane  /> */}
    </>
  );
};

const TestShadow = () => {
  const lightREf = useRef();

  return (
    <Canvas camera={{ position: [0, 5, 7] }} shadows={"soft"}>
      <Scene />
    </Canvas>
  );
};

export default TestShadow;
