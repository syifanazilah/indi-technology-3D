import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import maskot from "../../assets/3D/maskot.glb";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const Maskot = ({ isRotating, parentRef }) => {
  const gltf = useGLTF(maskot);

  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);
  
  useEffect(() => {
    actions[names[0]].fadeIn().play();
    if (isRotating) {
      actions[names[0]].paused = false;
    } else {
      actions[names[0]].paused = true;
    }
  }, [isRotating]);

  const timeScaleRef = useRef(1);
  const prevMouseX = useRef(null);

  useFrame(() => {
    actions[names[0]].timeScale = timeScaleRef.current * 1.7;
      console.log(timeScaleRef.current);
  })

  
  window.onmousemove = (event) => {
    const mouseX = event.clientX;
  
    // Deteksi arah gerakan mouse (kiri atau kanan)
    if (prevMouseX.current !== null && mouseX !== prevMouseX.current) {
      const direction = mouseX > prevMouseX.current ? "right" : "left";
      timeScaleRef.current = direction === "left" ? 1 : -1; // Menyimpan nilai timeScale ke dalam ref
    }
  
    prevMouseX.current = mouseX;
  };

  const { position, scale, rotation } = useControls({
    position: {
      value: [0, 3, 0],
      step: 0.1,
    },
    scale: {
      value: 1,
      step: 0.1,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });

  return (
    <group ref={parentRef} lookAt={[0, 0, 0]}>
      <group
        ref={ref}
        position={position}
        lookAt={[0, 0, 0]}
        scale={scale}
        rotation={rotation}>
        <primitive object={gltf.scene} key={gltf} />
      </group>
    </group>
  );
};

export default Maskot;
