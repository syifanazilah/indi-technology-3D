import { useAnimations, useGLTF } from "@react-three/drei";
import burung from "../../assets/3D/burung.glb";
import adjusctScale from "../../func/adjustScale";
import { useEffect } from "react";

const Burung = () => {
  const gltf = useGLTF(burung);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
        actions[name].play();
      });
  }, []);

  return (
    <group ref={ref} castShadow receiveShadow>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Burung;
