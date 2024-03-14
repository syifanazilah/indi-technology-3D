import { useAnimations, useGLTF } from "@react-three/drei";
import island from "../../assets/3D/scene.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";
import { AnimationMixer } from "three";
import Pohon from "./pohon";
import Burung from "./burung";
// import { Burung1 } from "./burung1";

const Island = ({ ...props }) => {
  const gltf = useGLTF(island);

  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [actions, names]);

  return (
    <group ref={ref} receiveShadow {...props}>
      <Pohon />
      <Burung />
      <primitive
        object={gltf.scene}
        key={gltf}
        scale={adjusctScale()}
        receiveShadow
      />
    </group>
  );
};

export default Island;
