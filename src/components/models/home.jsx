import { useAnimations, useGLTF } from "@react-three/drei";
import rumah from "../../assets/3D/rumah.glb";
import adjusctScale from "../../func/adjustScale";
import { useEffect } from "react";

const Rumah = () => {
  const gltf = useGLTF(rumah);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
  }, [actions, names]);

  return (
    <group ref={ref} castShadow receiveShadow>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Rumah;
