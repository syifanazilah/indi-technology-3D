import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Island = () => {
  const gltf = useGLTF("/island.glb");

  return <primitive object={gltf.scene} key={gltf} scale={0.1} />;
};

const Home = () => {
  return (
    <Canvas className="w-full min-h-screen" camera={{ position: [0, 10, -20] }}>
      <Suspense fallback={null}>
        {/* lightning */}
        <ambientLight intensity={5} />

        <OrbitControls autoRotate minZoom={10} maxZoom={10} />

        <Island />
      </Suspense>
    </Canvas>
  );
};

export default Home;
