import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import maskot from "../../assets/3D/maskot.glb";
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

  return (
    <group ref={parentRef} >
      <group
        ref={ref}
        position={[0, -5.5, 0]}
        scale={adjusctScale()}
      >
        <primitive object={gltf.scene} key={gltf} />
      </group>
    </group>
  );
};

export default Maskot;
