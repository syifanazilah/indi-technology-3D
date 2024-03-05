import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Canvas className="w-full min-h-screen">
        {/* orbit controls */}
        <OrbitControls autoRotate />

        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={"blue"} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
