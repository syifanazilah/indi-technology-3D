import { useAnimations, useGLTF } from "@react-three/drei";
import tangan from "../../assets/3D/tangan.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";
import { useControls } from "leva";

const Tangan = () => {
  const gltf = useGLTF(tangan);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          // child.receiveShadow = true;
        }
      });
    });
  }, [actions, names]);

  return (
    <group ref={ref} position={[-2, -1.5, 0]} rotation={[0, -1.5, 0]} scale={1.1}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Tangan;
