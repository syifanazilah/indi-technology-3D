import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import maskot from "../../assets/3D/maskot.glb";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import adjusctScale from "../../constant/adjustScale";

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
  const prevTouchX = useRef(null);

  //kecepatan animasi
  const kecepatan = window.innerWidth < 768 ? 2 : 1.7;
  useFrame(() => {
    actions[names[0]].timeScale = timeScaleRef.current * kecepatan;
  });

  window.onmousemove = (event) => {
    const mouseX = event.clientX;

    // Deteksi arah gerakan mouse (kiri atau kanan)
    if (prevMouseX.current !== null && mouseX !== prevMouseX.current) {
      const direction = mouseX > prevMouseX.current ? "right" : "left";
      timeScaleRef.current = direction === "left" ? 1 : -1;
    }

    prevMouseX.current = mouseX;
  };

  const getTouchX = (event) => {
    return event.touches ? event.touches[0].clientX : event.clientX;
  };

  window.ontouchmove = (event) => {
    const touchX = getTouchX(event);

    // Deteksi arah gerakan sentuhan
    if (prevTouchX.current !== null && touchX !== prevTouchX.current) {
      const direction = touchX > prevTouchX.current ? "right" : "left";
      timeScaleRef.current = direction === "left" ? 1 : -1;
    }

    prevTouchX.current = touchX;
  };

  const { position, rotation } = useControls({
    position: {
      value: [0, 0.7, 0],
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
        scale={adjusctScale()}
        rotation={rotation}
      >
        <primitive object={gltf.scene} key={gltf} />
      </group>
    </group>
  );
};

export default Maskot;
