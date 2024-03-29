import {
  OrbitControls,
  PerspectiveCamera,
  useHelper,
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
import HomeContent from "../components/HomeContent";
import Greeting from "./Greeting";
import Pohon from "../components/models/pohon";
import Loader from "../components/Loader";
import Maskot from "../components/models/Maskot";
import Burung from "../components/models/burung";
import Awan from "../components/models/awan";
import useCurrentHour from "../constant/currentHour";
import { useControls } from "leva";
import { AxesHelper, SpotLightHelper } from "three";
import { useNightContext } from "../context/nightContext";

const Scene = ({
  setCurrentStage,
  setIsDisplay,
  setIsRotating,
  isRotating,
}) => {
  const cameraRef = useRef();
  const objectRef = useRef();
  const lightRef = useRef();
  const spotLightRef = useRef();
  const maskotRef = useRef();
  const { gl, viewport } = useThree();
  const { isNight } = useNightContext();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const positionY = window.innerWidth < 768 ? -3 : -5;

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
      window.innerWidth < 768
        ? (objectRef.current.rotation.y += delta * 0.01 * Math.PI)
        : (objectRef.current.rotation.y += delta * 0.05 * Math.PI);

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      window.innerWidth < 768
        ? (rotationSpeed.current = delta * 0.01 * Math.PI)
        : (rotationSpeed.current = delta * 0.05 * Math.PI);
    }
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      objectRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      objectRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
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
          setIsDisplay(false);
      }
    }
  });

  return (
    <>
      <PerspectiveCamera position={[0, 5, 50]} ref={cameraRef} makeDefault />;
      {/* lightning */}
      <ambientLight intensity={isNight ? 0.1 : 0.5} />
      <directionalLight
        scale={3}
        position={[10, 20, 100]}
        // position={[x, y, z]}
        intensity={isNight ? 0 : 1.5}
        ref={lightRef}
        color={isNight ? "black" : "white"}
      />
      <spotLight
        ref={spotLightRef}
        castShadow
        position={isNight ? [0, 40, 96] : [-60, 102, 36]}
        target={maskotRef.current}
        angle={isNight ? 0.17 : 0.23}
        penumbra={0.23}
        intensity={15 * 1000}
        color={"white"}
      />
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        maxDistance={60}
        minDistance={45}
        dampingFactor={0.03}
      />
      {/* object 3D */}
      <Maskot ref={maskotRef} />
      <group
        ref={objectRef}
        position={[0, positionY, 0]}
        rotation={[0.08, 0, 0]}>
        <Awan isNight={isNight} />
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
  const { isNight } = useNightContext();

  return (
    <div className="overflow-y-hidden">
      {<Greeting progress={progress} />}

      <div
        style={{ userSelect: "none" }}
        className={`${
          isDisplay ? "home-content" : "home-content-hidden"
        } transition container max-w-screen-md absolute top-32 md:top-36 w-full left-1/2 flex items-center justify-center -translate-x-1/2 z-10`}>
        <HomeContent currentStage={currentStage} isDisplay={isDisplay} />
      </div>

      <Canvas
        className={`w-full min-h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }
        ${isNight ? "malam" : "siang"}`}
        camera={{ manual: true }}
        shadows={"soft"}>
        <Suspense fallback={<Loader progress={progress} />}>
          <Scene
            setCurrentStage={setCurrentStage}
            setIsDisplay={setIsDisplay}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
