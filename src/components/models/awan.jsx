import { useAnimations, useGLTF } from "@react-three/drei";
import awan from "../../assets/3D/awan.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";

const Awan = () => {
  const gltf = useGLTF(awan);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
        //   child.castShadow = true;
        //   child.receiveShadow = true;
        }
      });
    })
  }, [actions, names]);

  return (
    <group ref={ref} castShadow receiveShadow>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Awan;