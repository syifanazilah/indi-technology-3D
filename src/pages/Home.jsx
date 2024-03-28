import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import Island from "../components/models/Island";
import Rumah from "../components/models/home";
import Puzzle from "../components/models/puzzle";
import Tangan from "../components/models/tangan";
import RumahAsap from "../components/models/rumahasap";
import Rocket from "../components/models/rocket";
import { useControls } from "leva";
import HomeContent from "../components/HomeContent";
import Greeting from "./Greeting";
import Pohon from "../components/models/pohon";
import Loader from "../components/Loader";
import Maskot from "../components/models/Maskot";
import Burung from "../components/models/burung";

const Scene = ({ setCurrentStage, setIsDisplay, setIsRotating, isRotating }) => {
  const cameraRef = useRef();
  const objectRef = useRef();
  const lightRef = useRef();
  const spotLightRef = useRef();
  const MaskotRef = useRef();
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      objectRef.current.rotation.y += delta * 0.05 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.05 * Math.PI;
    }
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    
    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };  
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      objectRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = objectRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        console.log(normalizedRotation);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.5 && normalizedRotation <= 6.3:
          setCurrentStage(4);
          setIsDisplay(true);
          break;
        case normalizedRotation >= 1.2 && normalizedRotation <= 1.8:
          setCurrentStage(3);
          setIsDisplay(true);
          break;
        case normalizedRotation >= 2.6 && normalizedRotation <= 3.2:
          setCurrentStage(2);
          setIsDisplay(true);
          break;
        case normalizedRotation >= 3.7 && normalizedRotation <= 4.4:
          setCurrentStage(1);
          setIsDisplay(true);
          break;
        default:
          setCurrentStage(null);
          setIsDisplay(false);
      }
    }
  });

  const positionY = window.innerWidth < 768 ? -3 : -5;

  //mendeteksi apakah user sedang rotate
  const handleStart = () => {
    window.onmousemove = (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      setIsRotating(true);
    };
  };

  const handleEnd = () => {
    setIsRotating(false);
  };

  return (
    <>
      <PerspectiveCamera position={[0, 5, 50]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={1} />
      <directionalLight
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
      {/* object 3D */}
      <group
        ref={objectRef}
        position={[0, positionY, 0]}
        rotation={[0.08, 0, 0]}>

        <Rocket />
        <Tangan />
        <Puzzle />
        <Rumah />
        <RumahAsap />
        <Island />
        <Pohon />
        <Burung />
      </group>
    </>
  );
};

const Home = () => {
  const { progress } = useProgress();
  const [currentStage, setCurrentStage] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

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
        className={`w-full min-h-screen ${isRotating ? "cursor-grabbing" : "cursor-grab" }`}
        camera={{ manual: true }}
        shadows={"soft"}>
        <Suspense fallback={<Loader progress={progress} />}>
          <Scene
            setCurrentStage={setCurrentStage}
            setIsDisplay={setIsDisplay}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Maskot/>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
