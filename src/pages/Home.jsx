import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
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
extend({ OrbitControls });

const Scene = ({ setCurrentStage, setIsDisplay }) => {
  const cameraRef = useRef();
  const objectRef = useRef();
  const lightRef = useRef();
  const spotLightRef = useRef();
  const MaskotRef = useRef();
  const [isRotating, setIsRotating] = useState(false);

  // cek posisi
  useFrame(() => {
    const { x, z } = cameraRef.current.position;

    const posisiRumah = x >= -25 && x <= 10 && z >= -45 && z <= -30;
    const posisiRoket = x >= -40 && x <= -20 && z >= 5 && z <= 25;
    const posisiPuzzle = z >= -5 && z <= 15 && x >= 35;
    const posisiTangan = x >= -10 && x <= 10;

    switch (true) {
      case posisiRumah:
        setCurrentStage(1);
        setIsDisplay(true);
        break;
      case posisiRoket:
        setCurrentStage(2);
        setIsDisplay(true);

        break;
      case posisiTangan:
        setCurrentStage(3);
        setIsDisplay(true);

        break;
      case posisiPuzzle:
        setCurrentStage(4);
        setIsDisplay(true);

        break;
      default:
        setIsDisplay(false);
        break;
    }
  });

  //orbit pesawat (klo dipake)
  // useFrame((state) => {
  //   const pesawat = pesawatRef.current;

  //   // Mengatur rotasi pesawat agar menghadap ke pusat orbit
  //   const angle = Math.atan2(pesawat.position.x, pesawat.position.z);
  //   pesawat.rotation.y = angle - Math.PI / 2;

  //   pesawat.position.x = Math.sin(state.clock.elapsedTime * waktu) * radius;
  //   pesawat.position.z = Math.cos(state.clock.elapsedTime * waktu) * radius;
  // })

  const positionY = window.innerWidth < 768 ? -3 : -5;

  //mendeteksi apakah user sedang rotate
  const handleStart = () => {
    setIsRotating(true);
  };

  const handleEnd = () => {
    setIsRotating(false);
  };

  return (
    <>
      <PerspectiveCamera position={[0, 10, -40]} ref={cameraRef} makeDefault />;
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
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={1.4}
        minPolarAngle={1.3}
        maxDistance={45}
        minDistance={40}
        dampingFactor={0.03}
        rotateSpeed={window.innerWidth < 768 ? .5 : .2}
        onStart={handleStart}
        onEnd={handleEnd}
      />
      {/* object 3D */}
      <group
        ref={objectRef}
        position={[0, positionY, 0]}
        rotation={[0, 3.03, 0]}>
        <Maskot isRotating={isRotating} parentRef={MaskotRef} />

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
        className="w-full min-h-screen"
        camera={{ manual: true }}
        shadows={"soft"}
        >
        <Suspense fallback={<Loader progress={progress} />}>
          <Scene
            setCurrentStage={setCurrentStage}
            setIsDisplay={setIsDisplay}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
