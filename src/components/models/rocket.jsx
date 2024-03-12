import { useAnimations, useGLTF } from "@react-three/drei";
import rocket from "../../assets/3D/rocket.glb";
import adjusctScale from "../../func/adjustScale";
import { useEffect } from "react";

const Rocket = () => {
  const gltf = useGLTF(rocket);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
  }, [actions, names]);

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Rocket;
