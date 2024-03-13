import { useAnimations, useGLTF } from "@react-three/drei";
import tangan from "../../assets/3D/tangan.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";

const Tangan = () => {
  const gltf = useGLTF(tangan);
  const { ref, actions, names } = useAnimations(gltf.animations);
  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
    })
  }, [actions, names]);

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Tangan;
