import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import plane from "../../assets/3D/plane.glb";
import { useControls } from "leva";

const Pesawat = ({ isRotating, parentRef }) => {
  const gltf = useGLTF(plane);

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
    actions[names[0]].play();
    if (isRotating) {
      actions[names[0]].paused = false;
    } else {
      actions[names[0]].paused = true;
    }
  }, [isRotating]);

  const { position, scale, rotation } = useControls({
    position: {
      value: [25.0, 7.77, 0],
    //   value: [0, 7.77, 0],
      step: 0.1,
    },
    scale: {
      value: 3,
      step: 0.1,
    },
    rotation: {
      value: [0, -Math.PI, 0],
      step: 0.1,
    },
  });

  return (
    <group ref={parentRef} lookAt={[0, 0, 0]}>
      <group ref={ref} position={position} lookAt={[0, 0, 0]} scale={scale} rotation={rotation}>
        <primitive object={gltf.scene} key={gltf} />
      </group>
    </group>
  );
};

export default Pesawat;
