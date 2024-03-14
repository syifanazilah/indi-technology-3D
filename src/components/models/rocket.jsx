import { useAnimations, useGLTF } from "@react-three/drei";
import rocket from "../../assets/3D/rocket.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";

const Rocket = ({ ...props }) => {
  const gltf = useGLTF(rocket);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        // child.receiveShadow = true;
      }
    });
  }, []);

  return (
    <group ref={ref}  {...props}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()}/>
    </group>
  );
};

export default Rocket;
