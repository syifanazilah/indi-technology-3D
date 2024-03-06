import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <Canvas className="w-full min-h-screen">
      {/* orbit controls */}
      <OrbitControls autoRotate />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"blue"} />
      </mesh>
    </Canvas>
  );
};

export default Home;
