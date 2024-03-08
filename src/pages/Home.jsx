import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Greeting from "./Greeting";
extend({OrbitControls});

const Island = () => {
  const gltf = useGLTF("/island.glb");
  return <primitive object={gltf.scene} key={gltf} scale={0.1} />;
};

const Home = () => {
  const [isIslandLoaded, setIsIslandLoaded] = useState(false);
  console.log(isIslandLoaded);

  const handleIslandLoaded = () => {
    setIsIslandLoaded(true);
    console.log(isIslandLoaded);
  };
  return (
    <div className="overflow-y-hidden">
      <Greeting />

      <Canvas
        className="w-full min-h-screen"
        camera={{ position: [0, 10, -20] }}>
        <Suspense fallback={null}>
          {/* lightning */}
          <ambientLight intensity={5} />

          <OrbitControls autoRotate minZoom={10} maxZoom={10} />

          <Island />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
